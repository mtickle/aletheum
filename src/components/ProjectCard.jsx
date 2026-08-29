import React from 'react';

const SvgPlaceholder = ({ title }) => (
    <svg
        className="w-full h-full bg-slate-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
    >
        <rect width="400" height="200" fill="#f8fafc" />
        <path d="M0 0l400 200M400 0L0 200" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="50" y="75" width="300" height="50" fill="#f8fafc" opacity="0.9" />
        <text
            x="200"
            y="100"
            fill="#64748b"
            fontFamily="sans-serif"
            fontSize="18"
            fontWeight="600"
            textAnchor="middle"
            dominantBaseline="middle"
        >
            {title}
        </text>
    </svg>
);

const ProjectCard = ({ title, description, imageUrl, imageAlt, appUrl, buttonText }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-200">
            {/* Image Container */}
            <div className="h-48 overflow-hidden bg-slate-100 border-b border-gray-50">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <SvgPlaceholder title={title} />
                )}
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{description}</p>
                <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-aletheum-teal hover:bg-[#0a6653] text-white font-medium rounded-md px-4 py-2 text-center transition-colors focus:outline-none"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;