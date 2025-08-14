import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PublicationPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Publications' },
        { id: 'software-architecture', name: 'Software Architecture' },
        { id: 'network-security', name: 'Network Security' },
        { id: 'ai-testing', name: 'AI-Driven Testing' },
        { id: 'cloud-computing', name: 'Cloud Computing' },
        { id: 'performance-analysis', name: 'Performance Analysis' },
        { id: 'iot-systems', name: 'IoT Systems' }
    ];

    const publications = [
        {
            id: 1,
            title: "Adaptive Microservices Architecture for Cloud-Native Applications",
            authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Alex Kumar"],
            leadAuthor: {
                name: "Dr. Sarah Chen",
                image: "/images/justin.webp",
                position: "Senior Research Scientist",
                email: "s.chen@senetlab.edu"
            },
            journal: "IEEE Transactions on Software Engineering",
            year: "2024",
            month: "March",
            category: "software-architecture",
            citations: 23,
            doi: "10.1109/TSE.2024.1234567",
            abstract: "This paper presents a novel adaptive microservices architecture that automatically adjusts service granularity and deployment strategies based on runtime performance metrics and resource utilization patterns in cloud-native environments.",
            keywords: ["Microservices", "Cloud Computing", "Adaptive Systems", "Performance Optimization"],
            pages: "112-127",
            volume: "50",
            issue: "3"
        },
        {
            id: 2,
            title: "AI-Powered Network Intrusion Detection Using Deep Learning",
            authors: ["Dr. Emily Watson", "Prof. David Kim", "Dr. James Thompson"],
            leadAuthor: {
                name: "Dr. Emily Watson",
                image: "/images/justin.webp",
                position: "Associate Professor",
                email: "e.watson@senetlab.edu"
            },
            journal: "Journal of Network Security",
            year: "2024",
            month: "February",
            category: "network-security",
            citations: 41,
            doi: "10.1016/j.netsc.2024.234567",
            abstract: "We propose a deep learning-based intrusion detection system that combines convolutional and recurrent neural networks to identify sophisticated cyber attacks in real-time network traffic with 99.2% accuracy.",
            keywords: ["Network Security", "Deep Learning", "Intrusion Detection", "Cybersecurity"],
            pages: "45-62",
            volume: "18",
            issue: "2"
        },
        {
            id: 3,
            title: "Automated Test Case Generation Using Natural Language Processing",
            authors: ["Dr. Lisa Park", "Prof. Robert Johnson", "Dr. Maria Garcia"],
            leadAuthor: {
                name: "Dr. Lisa Park",
                image: "/images/justin.webp",
                position: "Research Fellow",
                email: "l.park@senetlab.edu"
            },
            journal: "ACM Transactions on Software Engineering",
            year: "2023",
            month: "December",
            category: "ai-testing",
            citations: 56,
            doi: "10.1145/3456789.3456790",
            abstract: "This work introduces an innovative approach to automated test case generation that leverages natural language processing to understand software requirements and generate comprehensive test suites automatically.",
            keywords: ["Software Testing", "NLP", "Test Generation", "Automation"],
            pages: "78-95",
            volume: "29",
            issue: "4"
        },
        {
            id: 4,
            title: "Edge Computing Optimization for IoT Applications",
            authors: ["Dr. Kevin Zhang", "Prof. Amanda Foster", "Dr. Daniel Lee"],
            leadAuthor: {
                name: "Dr. Kevin Zhang",
                image: "/images/justin.webp",
                position: "Principal Research Scientist",
                email: "k.zhang@senetlab.edu"
            },
            journal: "IEEE Internet of Things Journal",
            year: "2023",
            month: "November",
            category: "iot-systems",
            citations: 34,
            doi: "10.1109/JIOT.2023.567890",
            abstract: "We present a novel edge computing optimization framework specifically designed for IoT applications, reducing latency by 40% and improving energy efficiency in large-scale deployments.",
            keywords: ["Edge Computing", "IoT", "Optimization", "Energy Efficiency"],
            pages: "234-251",
            volume: "10",
            issue: "11"
        },
        {
            id: 5,
            title: "Quantum-Safe Communication Protocols for Modern Networks",
            authors: ["Prof. Michael Rodriguez", "Dr. Emily Watson", "Dr. Alex Kumar"],
            leadAuthor: {
                name: "Prof. Michael Rodriguez",
                image: "/images/justin.webp",
                position: "Professor & Lab Director",
                email: "m.rodriguez@senetlab.edu"
            },
            journal: "Nature Communications",
            year: "2023",
            month: "October",
            category: "network-security",
            citations: 78,
            doi: "10.1038/s41467-023-12345-6",
            abstract: "This paper introduces quantum-resistant cryptographic protocols that maintain security against both classical and quantum computing attacks while preserving network performance.",
            keywords: ["Quantum Cryptography", "Network Security", "Post-Quantum", "Communication Protocols"],
            pages: "1-12",
            volume: "14",
            issue: "1"
        },
        {
            id: 6,
            title: "Real-Time Performance Monitoring in Distributed Systems",
            authors: ["Dr. James Thompson", "Dr. Sarah Chen", "Prof. David Kim"],
            leadAuthor: {
                name: "Dr. James Thompson",
                image: "/images/justin.webp",
                position: "Senior Researcher",
                email: "j.thompson@senetlab.edu"
            },
            journal: "ACM Computing Surveys",
            year: "2023",
            month: "September",
            category: "performance-analysis",
            citations: 29,
            doi: "10.1145/3567890.3567891",
            abstract: "A comprehensive survey and novel framework for real-time performance monitoring in distributed systems, providing insights into bottleneck identification and automated optimization strategies.",
            keywords: ["Performance Monitoring", "Distributed Systems", "Real-time Analysis", "Optimization"],
            pages: "156-189",
            volume: "55",
            issue: "3"
        },
        {
            id: 7,
            title: "Serverless Architecture Patterns for Scalable Web Applications",
            authors: ["Dr. Maria Garcia", "Dr. Kevin Zhang", "Prof. Amanda Foster"],
            leadAuthor: {
                name: "Dr. Maria Garcia",
                image: "/images/justin.webp",
                position: "Research Scientist",
                email: "m.garcia@senetlab.edu"
            },
            journal: "IEEE Software",
            year: "2023",
            month: "August",
            category: "cloud-computing",
            citations: 67,
            doi: "10.1109/MS.2023.789012",
            abstract: "This study presents proven serverless architecture patterns that enable automatic scaling and cost optimization for web applications handling millions of concurrent users.",
            keywords: ["Serverless Computing", "Web Applications", "Scalability", "Architecture Patterns"],
            pages: "89-104",
            volume: "40",
            issue: "4"
        },
        {
            id: 8,
            title: "Machine Learning-Based Software Defect Prediction",
            authors: ["Dr. Daniel Lee", "Dr. Lisa Park", "Prof. Robert Johnson"],
            leadAuthor: {
                name: "Dr. Daniel Lee",
                image: "/images/justin.webp",
                position: "Assistant Professor",
                email: "d.lee@senetlab.edu"
            },
            journal: "Empirical Software Engineering",
            year: "2023",
            month: "July",
            category: "ai-testing",
            citations: 45,
            doi: "10.1007/s10664-023-10123-4",
            abstract: "We develop a machine learning framework that predicts software defects with 94% accuracy by analyzing code metrics, version control data, and developer interaction patterns.",
            keywords: ["Machine Learning", "Defect Prediction", "Software Quality", "Code Analysis"],
            pages: "67-89",
            volume: "28",
            issue: "4"
        }
    ];

    const filteredPublications = publications.filter(pub => {
        const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
        const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                             pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const stats = {
        totalPublications: publications.length,
        totalCitations: publications.reduce((sum, pub) => sum + pub.citations, 0),
        avgCitations: Math.round(publications.reduce((sum, pub) => sum + pub.citations, 0) / publications.length),
        currentYear: publications.filter(pub => pub.year === '2024').length
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Publications
                        </h1>
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
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.totalCitations}</div>
                                <div className="text-sm text-gray-600">Total Citations</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.avgCitations}</div>
                                <div className="text-sm text-gray-600">Avg. Citations</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stats.currentYear}</div>
                                <div className="text-sm text-gray-600">2024 Publications</div>
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
                        <div className="relative max-w-md mx-auto">
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

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
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

                    {/* Publications Grid */}
                    <div className="grid gap-8">
                        {filteredPublications.map((publication) => (
                            <div key={publication.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Author Photo and Info */}
                                    <div className="flex-shrink-0">
                                        <div className="flex flex-col items-center text-center">
                                            <img
                                                src={publication.leadAuthor.image}
                                                alt={publication.leadAuthor.name}
                                                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mb-3"
                                            />
                                            <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                                {publication.leadAuthor.name}
                                            </h4>
                                            <p className="text-xs text-gray-500 mb-2">
                                                {publication.leadAuthor.position}
                                            </p>
                                            <a 
                                                href={`mailto:${publication.leadAuthor.email}`}
                                                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                                            >
                                                {publication.leadAuthor.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Publication Details */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                                    {publication.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                                    <span className="font-medium">{publication.journal}</span>
                                                    <span>•</span>
                                                    <span>{publication.month} {publication.year}</span>
                                                    <span>•</span>
                                                    <span>{publication.citations} citations</span>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {categories.find(cat => cat.id === publication.category)?.name || publication.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {publication.abstract}
                                            </p>
                                            
                                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="font-medium text-gray-900">Authors:</span>
                                                    <p className="text-gray-600 mt-1">
                                                        {publication.authors.join(', ')}
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-900">Publication Details:</span>
                                                    <p className="text-gray-600 mt-1">
                                                        Vol. {publication.volume}, Issue {publication.issue}, pp. {publication.pages}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {publication.keywords.map((keyword, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Download PDF
                                            </button>
                                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                </svg>
                                                DOI: {publication.doi}
                                            </button>
                                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                </svg>
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No publications found</h3>
                            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PublicationPage;