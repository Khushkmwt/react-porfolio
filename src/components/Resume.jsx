import React from 'react';
import resume from '../assets/resume.pdf';

export const Resume = () => {
    return (
        <section id="resume" className="p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-9">
            <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Web Development (React, Node.js, Express.js)</li>
                    <li>Database Management (MySQL, MongoDB)</li>
                    <li>Frontend Technologies (HTML5, CSS3, JavaScript)</li>
                    <li>Version Control (Git)</li>
                </ul>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="mb-4">
                    <p className="text-sm font-medium">Email: Dilkhushkumawat33@gmail.com</p>
                    <p className="text-sm font-medium">Phone: +91 9001019992</p>
                    <p className="text-sm font-medium">Linkdine: <a href="https://www.linkedin.com/in/dilkhush-kumawat-167398255" className='text-blue-500'>https://www.linkedin.com/in/dilkhush-kumawat-167398255</a></p>
                </div>
                <h3 className="text-xl font-bold mb-4">Download Resume</h3>
                <a href={resume} download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download Resume</a>
            </div>
        </section>
    );
};
