import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const Layout = () => {
    return (
        <div className="bg-slate-900 text-slate-200 font-sans flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;