// pages/PublicationPage.js
// Drop-in replacement: อ่านข้อมูลจาก JSON ตามสคีมาที่ตกลงกันไว้

import { useMemo, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// อ่านข้อมูลจากแคตตาล็อกจริง
import publicationsData from "@/data/catalog/publications.json";
import categoriesData from "@/data/catalog/categories.json";
import topicsData from "@/data/catalog/topics.json";

// NEW: import ข้อมูลคนจากโฟลเดอร์ people (ปรับชื่อไฟล์ให้ตรงโปรเจกต์จริง)
import adisak from "@/data/people/adisak_intana.json";
import kuljaree from "@/data/people/kuljaree_tantayakul.json";
import wasimon from "@/data/people/wasimon_panichpattanakul.json";

const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const peopleFiles = [adisak, kuljaree, wasimon];

export default function PublicationPage() {
    // สร้างดัชนี lookup
    const categories = useMemo(() => {
        const base = [{ id: 'all', label: 'All Publications' }];
        const fromFile = (categoriesData?.categories || []).map(c => ({ id: c.id, label: c.label }));
        return [...base, ...fromFile];
    }, []);

    const topicMap = useMemo(() => {
        const map = new Map();
        (topicsData?.topics || []).forEach(t => map.set(t.id, t.label));
        return map;
    }, []);

    const publications = useMemo(() => (publicationsData?.publications || []), []);

    // ปีทั้งหมด (สำหรับฟิลเตอร์ปี)
    const years = useMemo(() => {
        const ys = Array.from(new Set(publications.map(p => p.year))).filter(Boolean).sort((a, b) => b - a);
        return ['all', ...ys];
    }, [publications]);

    // NEW: รายชื่อผู้เขียนจากโฟลเดอร์ people
    const peopleList = useMemo(() => {
        return peopleFiles.map(f => ({
            id: f.person?.id,
            name: f.person?.name
        })).filter(p => p.id && p.name);
    }, []);

    // NEW: map คน → เซ็ต pubId เพื่อเช็คกรองเร็ว ๆ
    const pubIdsByPerson = useMemo(() => {
        const m = new Map();
        peopleFiles.forEach(f => {
            const ids = new Set((f.authorships || []).map(a => a.pubId));
            m.set(f.person?.id, ids);
        });
        return m;
    }, []);


    // สถานะฟิลเตอร์/ค้นหา
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedTag, setSelectedTag] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    // const [selectedAuthor, setSelectedAuthor] = useState('all');
    const [selectedPersonId, setSelectedPersonId] = useState('all');


    // สถิติบน Hero
    const stats = useMemo(() => {
        const total = publications.length;
        const venues = new Set(publications.map(p => p.venue).filter(Boolean));
        const yearNums = publications.map(p => Number(p.year)).filter(n => !Number.isNaN(n));
        const latestYear = yearNums.length ? Math.max(...yearNums) : new Date().getFullYear();
        const latestYearCount = publications.filter(p => Number(p.year) === latestYear).length;

        return {
            totalPublications: total,
            uniqueVenues: venues.size,
            latestYear,
            latestYearCount
        };
    }, [publications]);

    // ฟังก์ชันช่วยแสดงรายละเอียดฉบับ/หน้า
    const detailsText = (p) => {
        const parts = [];
        if (p.volume) parts.push(`Vol. ${p.volume}`);
        if (p.issue) parts.push(`Issue ${p.issue}`);
        if (p.pages) parts.push(`pp. ${p.pages}`);
        return parts.join(', ');
    };

    // ตัวกรอง + เรียงลำดับ
    const filteredPublications = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();

        const matches = publications.filter(p => {
            const byCategory = selectedCategory === 'all' || p.categoryId === selectedCategory;
            const byYear = selectedYear === 'all' || String(p.year) === String(selectedYear);
            const byTag = selectedTag === 'all' || (Array.isArray(p.tags) && p.tags.includes(selectedTag));

            let bySearch = true;
            if (q) {
                const hay = [
                    p.title || '',
                    (p.displayCitation || ''),
                    (p.venue || ''),
                    ...(Array.isArray(p.authors) ? p.authors : []),
                    ...(Array.isArray(p.tags) ? p.tags.map(tid => topicMap.get(tid) || tid) : [])
                ].join(' ').toLowerCase();
                bySearch = hay.includes(q);
            }

            // NEW: กรองด้วยผู้เขียนจาก people folder
            const byAuthor =
                selectedPersonId === 'all' ||
                (pubIdsByPerson.get(selectedPersonId)?.has(p.id) === true);

            // UPDATE: รวม byAuthor เข้าในเงื่อนไขเดิม
            return byCategory && byYear && byTag && byAuthor && bySearch;
        });

        // เดิม
        return matches.sort((a, b) => {
            const ya = Number(a.year) || 0;
            const yb = Number(b.year) || 0;
            if (yb !== ya) return yb - ya;

            const ma = Number(a.month) || 0;
            const mb = Number(b.month) || 0;
            if (mb !== ma) return mb - ma;

            const ta = (a.title || '').toLowerCase();
            const tb = (b.title || '').toLowerCase();
            return ta.localeCompare(tb);
        });
    }, [publications, selectedCategory, selectedYear, selectedTag, selectedPersonId, searchTerm, topicMap, pubIdsByPerson]); // NEW: ใส่ selectedPersonId และ pubIdsByPerson ใน dependency


    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Publications</h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                            Discover our latest research contributions to software engineering and network technologies.
                            Our publications reflect our commitment to advancing the field through rigorous research
                            and innovative solutions.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.totalPublications}</div>
                                <div className="text-sm text-gray-600">Total Publications</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.uniqueVenues}</div>
                                <div className="text-sm text-gray-600">Unique Venues</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.latestYear}</div>
                                <div className="text-sm text-gray-600">Latest Year</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.latestYearCount}</div>
                                <div className="text-sm text-gray-600">{stats.latestYear} Publications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative max-w-xl mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search publications..."
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Category Chips */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {categories.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedCategory(c.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === c.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>

                    {/* Year & Tag Filters */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <select
                            className="w-full md:w-56 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            {years.map(y => (
                                <option key={y} value={y}>{y === 'all' ? 'All Years' : y}</option>
                            ))}
                        </select>

                        <select
                            className="w-full md:w-56 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                        >
                            <option value="all">All Topics</option>
                            {(topicsData?.topics || []).map(t => (
                                <option key={t.id} value={t.id}>{t.label}</option>
                            ))}
                        </select>
                        {/* NEW: Author filter dropdown */}
                        <select
                            className="w-full md:w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            value={selectedPersonId}
                            onChange={(e) => setSelectedPersonId(e.target.value)}
                        >
                            <option value="all">All Authors</option>
                            {peopleList.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>


                    {/* Publications List */}
                    <div className="grid gap-8">
                        {filteredPublications.map((p) => {
                            const categoryLabel = categories.find(cat => cat.id === p.categoryId)?.label || p.categoryId;
                            const monthLabel = monthNames[Number(p.month)] || '';
                            const tagLabels = (Array.isArray(p.tags) ? p.tags : []).map(tid => topicMap.get(tid) || tid);

                            return (
                                <div key={p.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                                    <div className="flex-1">
                                        {/* Title + Meta */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">{p.title}</h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                                    {p.venue && <span className="font-medium">{p.venue}</span>}
                                                    {(p.venueType || p.location) && <span>•</span>}
                                                    {p.venueType && <span>{p.venueType}</span>}
                                                    {p.location && <span>({p.location})</span>}
                                                    {(p.year || p.month) && <span>•</span>}
                                                    <span>{[monthLabel, p.year].filter(Boolean).join(' ')}</span>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {categoryLabel}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Authors & Details */}
                                        <div className="mb-4">
                                            {Array.isArray(p.authors) && p.authors.length > 0 && (
                                                <p className="text-sm text-gray-700"><span className="font-semibold">Authors: </span>{p.authors.join(', ')}</p>
                                            )}
                                            {(p.volume || p.issue || p.pages) && (
                                                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Publication Details: </span>{detailsText(p)}</p>
                                            )}
                                        </div>

                                        {/* Display Citation (ถ้ามี) */}
                                        {p.displayCitation && (
                                            <p className="text-gray-600 leading-relaxed mb-4">{p.displayCitation}</p>
                                        )}

                                        {/* Tags */}
                                        {tagLabels.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {tagLabels.map((lbl, i) => (
                                                    <span key={`${p.id}-tag-${i}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {lbl}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            {p.urls?.landing && (
                                                <a
                                                    href={p.urls.landing}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                                >
                                                    {/* Link icon */}
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                    </svg>
                                                    View Article
                                                </a>
                                            )}
                                            {p.urls?.pdf && (
                                                <a
                                                    href={p.urls.pdf}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                                >
                                                    {/* Download icon */}
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    Download PDF
                                                </a>
                                            )}
                                            {p.urls?.doi && (
                                                <a
                                                    href={p.urls.doi}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                                >
                                                    {/* DOI icon */}
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                    </svg>
                                                    DOI
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No publications found</h3>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
