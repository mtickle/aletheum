import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        // If the user is on a sub-page (e.g., a future /music route) and clicks a nav link,
        // route them back to the index first before attempting to scroll.
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="bg-aletheum-navy text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">

                <Link
                    to="/"
                    onClick={() => scrollToSection('welcome')}
                    className="text-2xl font-bold tracking-wide hover:text-aletheum-teal transition-colors focus:outline-none"
                >
                    The Aletheum Project
                </Link>

                <nav className="mt-4 md:mt-0 space-x-4 md:space-x-6 text-sm md:text-base font-medium">
                    <button
                        onClick={() => scrollToSection('aletheum')}
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                    >
                        Ministry & Theology
                    </button>

                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                    >
                        Web Portfolio
                    </button>

                    <button
                        onClick={() => scrollToSection('music')}
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                    >
                        Music
                    </button>

                    <button
                        onClick={() => scrollToSection('about')}
                        className="hover:text-aletheum-teal transition-colors focus:outline-none"
                    >
                        Who I Am
                    </button>
                </nav>

            </div>
        </header>
    );
};

export default Header;