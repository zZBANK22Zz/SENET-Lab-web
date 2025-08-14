// AwardPage.js - Complete Responsive Awards Page
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {useRouter} from 'next/router';

const AwardPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const Router = useRouter();

    const categories = [
        { id: 'all', name: 'All Awards' },
        { id: 'research-excellence', name: 'Research Excellence' },
        { id: 'innovation', name: 'Innovation' },
        { id: 'funding', name: 'Funding & Grants' },
        { id: 'publication', name: 'Publication Awards' },
        { id: 'collaboration', name: 'Collaboration' }
    ];

    const years = [
        { id: 'all', name: 'All Years' },
        { id: '2024', name: '2024' },
        { id: '2023', name: '2023' },
        { id: '2022', name: '2022' },
        { id: '2021', name: '2021' }
    ];

    const awards = [
        {
            id: 1,
            title: "Best Research Paper Award",
            subtitle: "IEEE International Conference on Software Engineering",
            year: "2024",
            month: "May",
            category: "research-excellence",
            description: "Outstanding contribution to network security protocols and implementation strategies in modern distributed systems.",
            amount: null,
            recipient: "Dr. Sarah Chen, Prof. Michael Rodriguez",
            institution: "IEEE Computer Society",
            impact: "This research has been cited over 150 times and has influenced industry standards for network security protocols.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,16L3,14V8.5C3,7.67 3.67,7 4.5,7H8V5.5C8,4.67 8.67,4 9.5,4H14.5C15.33,4 16,4.67 16,5.5V7H19.5C20.33,7 21,7.67 21,8.5V14L19,16H5M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2Z"/>
                </svg>
            ),
            badge: "Gold Medal"
        },
        {
            id: 2,
            title: "Innovation Excellence Award",
            subtitle: "TechExcellence Global Summit 2024",
            year: "2024",
            month: "March",
            category: "innovation",
            description: "Recognition for breakthrough AI-driven software testing methodologies that revolutionize quality assurance processes.",
            amount: "$15,000",
            recipient: "Dr. Emily Watson, Dr. Lisa Park",
            institution: "International Technology Innovation Council",
            impact: "The methodology has been adopted by 12 major tech companies, improving testing efficiency by 40%.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L13.09,8.26L22,9L17.5,13.74L18.18,22L12,19.77L5.82,22L6.5,13.74L2,9L10.91,8.26L12,2Z"/>
                </svg>
            ),
            badge: "Innovation Leader"
        },
        {
            id: 3,
            title: "Research Excellence Grant",
            subtitle: "National Science Foundation",
            year: "2024",
            month: "February",
            category: "funding",
            description: "Major funding award for cloud computing infrastructure research project focusing on sustainable and scalable solutions.",
            amount: "$850,000",
            recipient: "Prof. Michael Rodriguez, Dr. Kevin Zhang",
            institution: "National Science Foundation",
            impact: "This grant enables a 3-year research program that will advance cloud computing sustainability.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11,8C11,9.1 11.9,10 13,10H18V12C18,13.1 17.1,14 16,14H13L11,16H16C18.2,16 20,14.2 20,12V8C20,5.8 18.2,4 16,4H13C11.9,4 11,4.9 11,6V8M7,4C8.1,4 9,4.9 9,6V8C9,9.1 8.1,10 7,10H2V12C2,13.1 2.9,14 4,14H7L9,16H4C1.8,16 0,14.2 0,12V8C0,5.8 1.8,4 4,4H7Z"/>
                </svg>
            ),
            badge: "Major Grant"
        },
        {
            id: 4,
            title: "Outstanding Publication Award",
            subtitle: "ACM Computing Reviews",
            year: "2023",
            month: "December",
            category: "publication",
            description: "Most cited paper in software engineering for automated test case generation using natural language processing.",
            amount: null,
            recipient: "Dr. Lisa Park, Prof. Robert Johnson",
            institution: "Association for Computing Machinery",
            impact: "The paper has become a foundational reference in AI-driven testing with over 200 citations.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
            ),
            badge: "Most Cited"
        },
        {
            id: 5,
            title: "International Collaboration Award",
            subtitle: "Global Research Networks Alliance",
            year: "2023",
            month: "October",
            category: "collaboration",
            description: "Excellence in international research collaboration for IoT security standards development.",
            amount: "$25,000",
            recipient: "SEnet Research Lab Team",
            institution: "Global Research Networks Alliance",
            impact: "Led to establishment of new IoT security standards adopted by 15 countries.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                </svg>
            ),
            badge: "Global Impact"
        },
        {
            id: 6,
            title: "Young Researcher Award",
            subtitle: "IEEE Computer Society",
            year: "2023",
            month: "September",
            category: "research-excellence",
            description: "Recognizing exceptional research contributions by early-career researchers in network performance analysis.",
            amount: "$10,000",
            recipient: "Dr. James Thompson",
            institution: "IEEE Computer Society",
            impact: "This recognition has opened new research opportunities and collaborations worldwide.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,4C16.88,4 17.67,4.84 17.67,5.84C17.67,6.84 16.88,7.68 16,7.68C15.12,7.68 14.33,6.84 14.33,5.84C14.33,4.84 15.12,4 16,4M16,10.5C18.5,10.5 20.5,8.5 20.5,6C20.5,3.5 18.5,1.5 16,1.5C13.5,1.5 11.5,3.5 11.5,6C11.5,8.5 13.5,10.5 16,10.5Z"/>
                </svg>
            ),
            badge: "Rising Star"
        },
        {
            id: 7,
            title: "Industry Partnership Excellence",
            subtitle: "Technology Innovation Partnership Awards",
            year: "2023",
            month: "June",
            category: "collaboration",
            description: "Outstanding collaboration with industry partners for practical implementation of research solutions.",
            amount: "$30,000",
            recipient: "Dr. Kevin Zhang, Dr. Maria Garcia",
            institution: "Technology Innovation Council",
            impact: "Partnership resulted in 3 patents and 2 commercial products in the market.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
            ),
            badge: "Partnership"
        },
        {
            id: 8,
            title: "Sustainable Technology Award",
            subtitle: "Green Computing Initiative",
            year: "2022",
            month: "November",
            category: "innovation",
            description: "Innovation in sustainable cloud computing solutions that reduce energy consumption by 35%.",
            amount: "$20,000",
            recipient: "Dr. Daniel Lee, Prof. Amanda Foster",
            institution: "Environmental Technology Council",
            impact: "The solution has been implemented in 8 data centers, saving 2.5 million kWh annually.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.17,22L6.58,19.58C8.23,20.25 10.25,20.25 12,20.25C13.75,20.25 15.77,20.25 17.42,19.58L18.83,22L20.18,21.34C18.1,16.17 16,10 7,8H17Z"/>
                </svg>
            ),
            badge: "Eco-Friendly"
        }
    ];

    const filteredAwards = awards.filter(award => {
        const matchesCategory = selectedCategory === 'all' || award.category === selectedCategory;
        const matchesYear = selectedYear === 'all' || award.year === selectedYear;
        return matchesCategory && matchesYear;
    });

    const stats = {
        totalAwards: awards.length,
        totalFunding: awards
            .filter(award => award.amount)
            .reduce((sum, award) => sum + parseInt(award.amount.replace(/[$,]/g, '')), 0),
        currentYear: awards.filter(award => award.year === '2024').length,
        categories: new Set(awards.map(award => award.category)).size
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                            Awards & Recognition
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                            Our research excellence has been recognized globally through prestigious awards, 
                            grants, and honors. These achievements reflect our commitment to advancing 
                            software engineering and network technologies through innovative research.
                        </p>
                        
                        {/* Statistics Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.totalAwards}</div>
                                <div className="text-xs sm:text-sm text-gray-600">Total Awards</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                                    ${(stats.totalFunding / 1000).toFixed(0)}K
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">Total Funding</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.currentYear}</div>
                                <div className="text-xs sm:text-sm text-gray-600">2024 Awards</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.categories}</div>
                                <div className="text-xs sm:text-sm text-gray-600">Categories</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 sm:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mobile Filters */}
                    <div className="lg:hidden space-y-4 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                            >
                                {years.map((year) => (
                                    <option key={year.id} value={year.id}>
                                        {year.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Desktop Filters */}
                    <div className="hidden lg:block">
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            selectedCategory === category.id
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mb-8">
                            {years.map((year) => (
                                <button
                                    key={year.id}
                                    onClick={() => setSelectedYear(year.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        selectedYear === year.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {year.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Awards Grid */}
                    <div className="grid gap-6 lg:gap-8">
                        {filteredAwards.map((award) => (
                            <div key={award.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 sm:p-8">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Award Icon and Badge */}
                                    <div className="flex-shrink-0">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                                                {award.icon}
                                            </div>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                {award.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Award Details */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                                    {award.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                                                    <span className="font-medium">{award.subtitle}</span>
                                                    <span>•</span>
                                                    <span>{award.month} {award.year}</span>
                                                    {award.amount && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="font-semibold text-green-600">{award.amount}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {categories.find(cat => cat.id === award.category)?.name || award.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {award.description}
                                            </p>
                                            
                                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="font-medium text-gray-900">Recipient:</span>
                                                    <p className="text-gray-600 mt-1">{award.recipient}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-900">Awarding Institution:</span>
                                                    <p className="text-gray-600 mt-1">{award.institution}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <span className="font-medium text-gray-900 block mb-2">Impact & Significance:</span>
                                            <p className="text-gray-600 text-sm leading-relaxed">{award.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAwards.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No awards found</h3>
                            <p className="text-gray-600">Try adjusting your filters to see more awards.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                        Excellence in Research
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                        Our awards represent our ongoing commitment to pushing the boundaries of 
                        knowledge and creating real-world impact through innovative research.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => {
                            Router.push("/ResearchPage");
                        }} className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors">
                            View Our Research
                        </button>
                        <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                            Collaboration Opportunities
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AwardPage;