// Header.js
export const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-10">
            <nav className="flex justify-between items-center h-16">
                <div className="text-2xl font-semibold tracking-wide">
                    <span className="inline-block animate-pulse mr-2">Dilkhush</span> 
                    <span className="inline-block transform hover:rotate-12 transition-transform">Kumawat</span>
                </div>
                <div className="flex space-x-4">
                    <a href="#about" className="hover:text-teal-400 transition duration-300">About</a>
                    <a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a>
                    <a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a>
                    <a href="#resume" className="hover:text-teal-400 transition duration-300">Resume</a>
                </div>
            </nav>
        </header>
    );
};
