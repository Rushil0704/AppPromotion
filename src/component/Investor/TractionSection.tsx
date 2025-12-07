import React from 'react'
import Heading from '../Common/Heading'

type Entry = {
    id: string
    year: string
    title: string
    description: string
    side: 'left' | 'right'
    icon?: string
}

const entries: Entry[] = [
    { id: 'e1', year: '2024', title: 'Idea & Research', description: 'Conceptualized FactsScan after identifying gaps in food label transparency and consumer health awareness.', side: 'right', icon: 'idea' },
    { id: 'e2', year: '2025', title: 'App Launch', description: 'Developed and launched the MVP to test scanning functionality and engage early adopters.', side: 'left', icon: 'rocket' },
    { id: 'e3', year: '2025', title: 'Early User Growth', description: 'Grew to 10K+ active users, validating strong demand for instant food scanning and label insights.', side: 'right', icon: 'users' },
    { id: 'e4', year: '2025', title: 'Rapid Adoption', description: 'Crossed 15K+ downloads within six months, showing strong traction in the market.', side: 'left', icon: 'trend' },
    { id: 'e5', year: '2025', title: 'Brand & Partnerships', description: 'Built brand identity with the vision “See Beyond the Label” and initiated collaborations with health brands and experts.', side: 'right', icon: 'handshake' },
    { id: 'e6', year: '2025', title: 'Investor Engagement', description: 'Opening doors for seed and angel investment to expand features, marketing, and user acquisition.', side: 'left', icon: 'money' },
    { id: 'e7', year: 'Future', title: 'AI & Global Expansion', description: 'Plan to integrate AI-powered recommendations, regional language support, and expand into international markets.', side: 'right', icon: 'ai' }
]

const Icon: React.FC<{ name?: string }> = ({ name }) => {
    switch (name) {
        case 'idea':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a6 6 0 00-3 11.197V16a1 1 0 001 1h4a1 1 0 001-1v-2.803A6 6 0 0012 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'rocket':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2s-3 1-6 4-4 6-4 6 4 1 6-1 4-6 4-6 1-2 0-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'users':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'trend':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 17l6-6 4 4 8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'handshake':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a1 1 0 01-1 1h-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 9v-4a1 1 0 011-1h4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 12l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'money':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 11a4 4 0 01-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        case 'ai':
            return (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12h8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )
        default:
            return <span className="w-4 h-4 block" />
    }
}

const TractionSection: React.FC = () => {
    // keep chronological ordering for center icons
    const ordered = entries

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Heading text="Traction &" heighlight="Achievements" />
                </div>

                <div className="relative">
                    {/* full vertical line centered in the container */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />

                    <div className="space-y-6">
                        {ordered.map((entry) => (
                            <div key={entry.id} className="relative grid grid-cols-1 lg:grid-cols-2 items-start gap-4 py-6">
                                {/* left column */}
                                <div className="lg:pr-8">
                                    {entry.side === 'left' ? (
                                        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                                            <div className="text-sm text-green-600 font-semibold mb-2">{entry.year}</div>
                                            <h4 className="text-lg font-semibold mb-2">{entry.title}</h4>
                                            <p className="text-gray-600 text-sm">{entry.description}</p>
                                        </div>
                                    ) : (
                                        <div className="hidden lg:block" />
                                    )}
                                </div>

                                {/* right column */}
                                <div className="lg:pl-8">
                                    {entry.side === 'right' ? (
                                        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                                            <div className="text-sm text-green-600 font-semibold mb-2">{entry.year}</div>
                                            <h4 className="text-lg font-semibold mb-2">{entry.title}</h4>
                                            <p className="text-gray-600 text-sm">{entry.description}</p>
                                        </div>
                                    ) : (
                                        <div className="hidden lg:block" />
                                    )}
                                </div>

                                {/* centered icon bubble positioned at the middle of the row */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                                    <div className={`rounded-full p-3 shadow-lg bg-yellow-400`}>
                                        <Icon name={entry.icon} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TractionSection
