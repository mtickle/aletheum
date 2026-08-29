import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-aletheum-navy text-slate-400 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-4 md:mb-0 text-sm">
                    &copy; {currentYear} Mike Tickle. All rights reserved.
                </div>

                <div className="flex space-x-6 text-sm">
                    <a
                        href="https://github.com/mtickle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                        aria-label="GitHub Profile"
                    >
                        GitHub
                    </a>
                    <a
                        href="#welcome"
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                    >
                        Back to Top
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;