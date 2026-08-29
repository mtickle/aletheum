import React from 'react';
import ProjectCard from './ProjectCard';

// Asset imports 
// import platformImage from '../assets/aletheum-platform.png';
// import scrollingAppImage from '../assets/scrolling-app.png';
// import engineImage from '../assets/engine.png';
// import pipelineImage from '../assets/pipeline.png';
// import narCheckerImage from '../assets/nar-checker.png';
// import quadrantsImage from '../assets/quadrants.png';
// import wordWhenImage from '../assets/wordwhen.png';

const projects = [
    {
        title: 'Aletheum Platform',
        category: 'operations',
        description: 'A clean, adaptable boilerplate site serving as a reliable canvas for church congregations.',
        imageUrl: null,
        imageAlt: 'A screenshot of the Aletheum Platform',
        appUrl: 'https://mtickle.github.io/aletheum-platform/',
        buttonText: 'View Platform',
    },
    {
        title: 'Praise Team Pipeline',
        category: 'operations',
        description: 'Workflow and scheduling tool designed for quick data entry by busy volunteers.',
        imageUrl: null,
        imageAlt: 'A screenshot of Praise Team Pipeline',
        appUrl: 'https://mtickle.github.io/praise-pipeline/',
        buttonText: 'Open Pipeline',
    },
    {
        title: 'The Scrolling App',
        category: 'content',
        description: 'Fluid, dynamic media delivery system for high engagement content.',
        imageUrl: null,
        imageAlt: 'A screenshot of the Scrolling App',
        appUrl: 'https://mtickle.github.io/scrolling-app/',
        buttonText: 'Start Scrolling',
    },
    {
        title: 'Scrolling App Engine',
        category: 'content',
        description: 'The backend administrative engine powering the media delivery system.',
        imageUrl: null,
        imageAlt: 'A screenshot of the Engine',
        appUrl: 'https://mtickle.github.io/scrolling-engine/',
        buttonText: 'Manage Content',
    },
    {
        title: 'WordWhen',
        category: 'content',
        description: 'An interactive tool helping children navigate and process complex emotions.',
        imageUrl: null,
        imageAlt: 'A screenshot of WordWhen',
        appUrl: 'https://mtickle.github.io/wordwhen/',
        buttonText: 'Launch WordWhen',
    },
    {
        title: 'NAR Checker',
        category: 'theology',
        description: 'A structured, data-forward interface for theological analysis and checking.',
        imageUrl: null,
        imageAlt: 'A screenshot of the NAR Checker',
        appUrl: 'https://mtickle.github.io/nar-checker/',
        buttonText: 'Analyze',
    },
    {
        title: 'Faith Quadrants Planner',
        category: 'theology',
        description: 'A visual, grid-based mapping tool for strategic ministry planning and assessment.',
        imageUrl: null,
        imageAlt: 'A screenshot of Faith Quadrants',
        appUrl: 'https://mtickle.github.io/faith-quadrants/',
        buttonText: 'Start Mapping',
    },
];

const categories = [
    { id: 'operations', title: 'Ministry Operations' },
    { id: 'content', title: 'Content & Engagement' },
    { id: 'theology', title: 'Theology & Strategy' },
];

const AletheumDirectory = () => {
    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">The Directory</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    A centralized hub for theological tools, media engines, and structural ministry planning.
                </p>
            </div>

            {categories.map((cat) => {
                const categoryProjects = projects.filter((project) => project.category === cat.id);
                if (categoryProjects.length === 0) return null;

                return (
                    <div key={cat.id} className="mb-14">
                        <h3 className="text-2xl font-semibold text-aletheum-teal mb-6 border-b-2 border-slate-200 pb-2">
                            {cat.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryProjects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AletheumDirectory;