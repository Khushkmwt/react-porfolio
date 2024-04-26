import React from 'react';

export const Header = () => {
    return (
        <header className="bg-gray-900 text-gray-400 p-4">
            <nav className="flex justify-between items-center h-16">
                <div className="text-2xl font-semibold tracking-wide">Dilkhush Kumawat</div>
                <div className="flex space-x-4">
                    <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
                    <a href="#projects" className="hover:text-gray-300 transition duration-300">Projects</a>
                    <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
                    <a href="#resume" className="hover:text-gray-300 transition duration-300">Resume</a>
                </div>
            </nav>
        </header>
    );
};
