import React from 'react';
import resume from '../assets/resume.pdf';
export const Resume = () => {
    return (
        <section id="resume" className="p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-9">
            <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Skills & Experience</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Web Development (React, Node.js, Express.js)</li>
                    <li>Database Management (MySQL, MongoDB)</li>
                    <li>Frontend Technologies (HTML5, CSS3, JavaScript)</li>
                    <li>Version Control (Git)</li>
                </ul>
                {/* <h3 className="text-xl font-bold my-4">Work Experience</h3>
                <div className="mb-4">
                    <p className="font-bold">Company Name</p>
                    <p className="text-sm text-gray-700">Position: Web Developer</p>
                    <p className="text-sm text-gray-700">Duration: January 2020 - Present</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit arcu nec justo pretium, vel consequat elit dictum.</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Company Name</p>
                    <p className="text-sm text-gray-700">Position: Intern</p>
                    <p className="text-sm text-gray-700">Duration: June 2019 - August 2019</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit arcu nec justo pretium, vel consequat elit dictum.</p>
                </div> */}
                <a href={resume} download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download Resume</a>
            </div>
        </section>
    );
};
