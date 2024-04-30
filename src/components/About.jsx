import React from 'react';
import coder from '../assets/coder.jpg';
import './About.css'; // Import the CSS file for animations

export const About = () => {
    return (
        <section id="about" className="p-8 py-40 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 min-h-screen relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-2">
                        <img src={coder} alt="Tech Cartoon" className="rounded-lg shadow-md border-4 border-white" />
                    </div>
                    <div className="text-gray-100 relative">
                        <div className="custom-animation">
                            <span>Dilkhush Kumawat</span>
                            <span>B.Tech in Information Technology</span>
                            <span>Passionate web developer proficient in HTML, CSS, JavaScript, React.js, Node.js,
                                Express.js, and MongoDB. Dedicated to delivering user-centric solutions and excited
                                about leveraging technology to solve complex problems.</span>
                        </div>
                        <p className="text-lg text-gray-200 mt-8">In my free time, I enjoy coding, reading, and exploring new technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
