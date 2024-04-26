import React from 'react';
import coder from '../assets/coder.jpg'
export const About = () => {
    return (
        <section id="about" className="p-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-2">
                        <img src={coder} alt="Tech Cartoon" className="rounded-lg shadow-md border-4 border-white" />
                    </div>
                    <div className="text-gray-100 relative">
                        <p className="text-lg mb-">
                            <span className="inline-block overflow-hidden whitespace-no-wrap typing-text text-white transition-all duration-500">
                              Dilkhush Kumawat
                              B.Tech in Information Technology
                              Passionate web developer proficient in HTML, CSS, JavaScript, React.js, Node.js,
                               Express.js, and MongoDB. Dedicated to delivering user-centric solutions and excited
                               about leveraging technology to solve complex problems.
                            </span>
                        </p>
                        <p className="text-lg text-gray-200">In my free time, I enjoy coding, reading, and exploring new technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
