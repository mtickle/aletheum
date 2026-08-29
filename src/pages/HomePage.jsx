import React from 'react';
import AletheumDirectory from '../components/AletheumDirectory';

const HomePage = () => {
    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-aletheum-teal text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Welcome Home
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        Faith in action. Discover a unified collection of tools designed to serve communities, support one another, and bring clarity to ministry operations.
                    </p>
                </div>
            </div>

            {/* Main Content: Directory Grid */}
            <div id="aletheum" className="max-w-7xl mx-auto px-4 py-12 w-full">
                <AletheumDirectory />
            </div>

            {/* About Section */}
            <div id="about" className="bg-white py-16 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-aletheum-teal pb-4 inline-block">
                        Who I Am
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed text-left">
                        I am a military veteran and software developer who has been building technology solutions since 1996. I currently serve as a Technical Support Team Lead at SAS, focusing heavily on public safety software and tools that support front-line personnel. The Aletheum Project represents a convergence of my professional expertise with my personal faith, built utilizing modern web technologies like React, Tailwind CSS, Vite, and Node.js.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;