// pages/PublicationPage.js
// Drop-in replacement: อ่านข้อมูลจาก JSON ตามสคีมาที่ตกลงกันไว้

import { useMemo, useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// อ่านข้อมูลจากแคตตาล็อกจริง
import publicationsData from "@/data/catalog/publications.json";
import categoriesData from "@/data/catalog/categories.json";
import topicsData from "@/data/catalog/topics.json";

// NEW: import ข้อมูลคนจากโฟลเดอร์ authors_publications (ปรับชื่อไฟล์ให้ตรงโปรเจกต์จริง)
import adisak from "@/data/authors_publications/adisak_intana.json";
import kuljaree from "@/data/authors_publications/kuljaree_tantayakul.json";
import wasimon from "@/data/authors_publications/wasimon_panichpattanakul.json";

const ITEMS_PER_PAGE = 10;
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
    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when any filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedYear, selectedTag, selectedPersonId, searchTerm]);


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

            // NEW: กรองด้วยผู้เขียนจาก authors_publications folder
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

    // Pagination logic
    const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
    const paginatedPublications = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredPublications.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredPublications, currentPage]);


    return (
        <div className="min-h-screen bg-bg-off">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-white py-20 lg:py-28 border-b border-border-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold mb-6 tracking-wide uppercase">
                            Research Output
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 tracking-tight">
                            Our <span className="text-gradient-official">Publications</span>
                        </h1>
                        <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
                            Discover our latest research contributions to software engineering and network technologies.
                            Our work reflects a commitment to advancing the field through rigorous innovation.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { label: 'Total Publications', value: stats.totalPublications },
                                { label: 'Unique Venues', value: stats.uniqueVenues },
                                { label: 'Latest Year', value: stats.latestYear },
                                { label: `${stats.latestYear} Publications`, value: stats.latestYearCount },
                            ].map((stat, idx) => (
                                <div key={idx} className="card-base p-6 text-center bg-white">
                                    <div className="text-3xl font-bold text-primary-deep mb-1">{stat.value}</div>
                                    <div className="text-xs font-medium text-text-muted uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-12 bg-white sticky top-20 z-40 border-b border-border-light shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        {/* Search Bar */}
                        <div className="relative w-full lg:max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search publications..."
                                className="block w-full pl-11 pr-4 py-3 border border-border-light rounded-xl leading-5 bg-bg-off placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-action focus:border-transparent transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Dropdown Filters */}
                        <div className="flex flex-wrap gap-4 w-full lg:flex-1 justify-center lg:justify-end">
                            <select
                                className="w-full sm:w-40 border border-border-light rounded-xl px-3 py-3 text-sm bg-bg-off text-text-main focus:ring-2 focus:ring-primary-action outline-none"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                {years.map(y => (
                                    <option key={y} value={y}>{y === 'all' ? 'All Years' : y}</option>
                                ))}
                            </select>

                            <select
                                className="w-full sm:w-40 border border-border-light rounded-xl px-3 py-3 text-sm bg-bg-off text-text-main focus:ring-2 focus:ring-primary-action outline-none"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                <option value="all">All Topics</option>
                                {(topicsData?.topics || []).map(t => (
                                    <option key={t.id} value={t.id}>{t.label}</option>
                                ))}
                            </select>

                            <select
                                className="w-full sm:w-56 border border-border-light rounded-xl px-3 py-3 text-sm bg-bg-off text-text-main focus:ring-2 focus:ring-primary-action outline-none"
                                value={selectedPersonId}
                                onChange={(e) => setSelectedPersonId(e.target.value)}
                            >
                                <option value="all">All Authors</option>
                                {peopleList.map(p => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Category Chips */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedCategory(c.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedCategory === c.id 
                                    ? 'bg-primary-deep text-white shadow-md' 
                                    : 'bg-bg-off text-text-muted hover:bg-primary-soft hover:text-primary-deep'
                                }`}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* List Results Meta */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="flex justify-between items-center text-sm text-text-muted font-medium">
                    <span>Showing {filteredPublications.length} results</span>
                    {totalPages > 1 && (
                        <span>Page {currentPage} of {totalPages}</span>
                    )}
                </div>
            </div>

            {/* Publications List */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6">
                        {paginatedPublications.map((p) => {
                            const categoryLabel = categories.find(cat => cat.id === p.categoryId)?.label || p.categoryId;
                            const monthLabel = monthNames[Number(p.month)] || '';
                            const tagLabels = (Array.isArray(p.tags) ? p.tags : []).map(tid => topicMap.get(tid) || tid);

                            return (
                                <div key={p.id} className="card-base p-6 md:p-10 group">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        <div className="flex-1">
                                            {/* Category Tag */}
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-[10px] font-bold uppercase tracking-wider mb-6">
                                                {categoryLabel}
                                            </span>

                                            <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-primary-deep transition-colors leading-tight mb-4">
                                                {p.title}
                                            </h3>

                                            <div className="space-y-3 mb-8">
                                                {Array.isArray(p.authors) && p.authors.length > 0 && (
                                                    <p className="text-sm text-text-muted">
                                                        <span className="font-bold text-text-main">Authors: </span>
                                                        {p.authors.join(', ')}
                                                    </p>
                                                )}
                                                
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
                                                    {p.venue && (
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-text-main uppercase text-[11px] tracking-wide">Journal/Con:</span>
                                                            <span className="italic">{p.venue}</span>
                                                        </div>
                                                    )}
                                                    {p.location && <span>📍 {p.location}</span>}
                                                    <span>📅 {[monthLabel, p.year].filter(Boolean).join(' ')}</span>
                                                    {(p.volume || p.issue || p.pages) && (
                                                        <span className="text-primary-action font-medium">{detailsText(p)}</span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Display Citation */}
                                            {p.displayCitation && (
                                                <p className="text-sm text-text-muted leading-relaxed mb-6 border-l-4 border-primary-soft pl-4 italic">
                                                    "{p.displayCitation}"
                                                </p>
                                            )}

                                            {/* Tags */}
                                            {tagLabels.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {tagLabels.map((lbl, i) => (
                                                        <span key={`${p.id}-tag-${i}`} className="px-2.5 py-1 rounded-lg bg-bg-off text-text-muted text-[11px] font-semibold border border-border-light">
                                                            {lbl}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-row lg:flex-col gap-3 justify-start lg:justify-center border-t lg:border-t-0 lg:border-l border-border-light pt-6 lg:pt-0 lg:pl-8">
                                            {p.urls?.landing && (
                                                <a
                                                    href={p.urls.landing}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn-primary py-2 px-4 text-xs whitespace-nowrap"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                    </svg>
                                                    Article
                                                </a>
                                            )}
                                            {p.urls?.pdf && (
                                                <a
                                                    href={p.urls.pdf}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn-secondary py-2 px-4 text-xs whitespace-nowrap"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    PDF
                                                </a>
                                            )}
                                            {p.urls?.doi && (
                                                <a
                                                    href={p.urls.doi}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn-secondary py-2 px-4 text-xs whitespace-nowrap border-primary-action text-primary-action hover:bg-primary-soft"
                                                >
                                                    <span className="font-bold">DOI</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredPublications.length === 0 && (
                        <div className="card-base py-24 text-center bg-white">
                            <div className="w-20 h-20 bg-primary-soft rounded-full flex items-center justify-center text-primary-deep mx-auto mb-6">
                                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-text-main mb-2">No publications found</h3>
                            <p className="text-text-muted">Try adjusting your filters or search term</p>
                            <button 
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                    setSelectedYear('all');
                                    setSelectedTag('all');
                                    setSelectedPersonId('all');
                                }}
                                className="mt-8 text-primary-action font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                                    currentPage === 1 
                                    ? 'bg-bg-off text-border-light cursor-not-allowed' 
                                    : 'bg-white text-primary-deep border border-border-light hover:border-primary-action shadow-sm'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>

                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, i) => {
                                    const pageNum = i + 1;
                                    // Logic to show only a few pages if too many
                                    if (
                                        pageNum === 1 || 
                                        pageNum === totalPages || 
                                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                                    ) {
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`w-12 h-12 rounded-xl font-bold transition-all ${
                                                    currentPage === pageNum 
                                                    ? 'bg-primary-deep text-white shadow-lg scale-110' 
                                                    : 'bg-white text-text-muted hover:bg-primary-soft hover:text-primary-deep'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    } else if (
                                        pageNum === currentPage - 2 || 
                                        pageNum === currentPage + 2
                                    ) {
                                        return <span key={pageNum} className="text-text-muted">...</span>;
                                    }
                                    return null;
                                })}
                            </div>

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                                    currentPage === totalPages 
                                    ? 'bg-bg-off text-border-light cursor-not-allowed' 
                                    : 'bg-white text-primary-deep border border-border-light hover:border-primary-action shadow-sm'
                                }`}
                            >
                                Next
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
