import React, { useState } from 'react';
import wanderlust from '../assets/wanderlust.png';
import weather from '../assets/weather.png';
import codeblog from '../assets/codeblog.png'

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: 'Wanderlust',
            heading: 'Full Stack Web Development',
            description: 'A full-stack web project featuring a blog portal with image support.',
            technologies: ['Map', 'Node.js', 'Express.js', 'MongoDB'],
            demoLink: 'https://wanderlust-project-g40z.onrender.com',
            repoLink: 'https://github.com/Khushkmwt/major-project',
            image: wanderlust,
            details: 'This full-stack web project is a dynamic blog portal that allows users to create, view, and interact with blog posts. Users can add, edit, and delete their own posts, as well as like, rate, and comment on others posts. The portal also features a map integration, allowing users to geotag their posts and explore posts based on location. The user interface is designed to be intuitive and responsive, providing a seamless experience for both creators and readers.'
        },
        {
            name: 'Weather App',
            heading: 'Frontend Web App',
            description: 'A weather app built with React to display current weather conditions.',
            technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
            demoLink: 'https://weatherappkhushkumwt.netlify.app/',
            repoLink: 'https://github.com/Khushkmwt/weatherApp-react',
            image: weather,
            details: 'This weather app, built using React, provides users with current weather information for their location. It offers detailed forecasts, including temperature, humidity, wind speed, and conditions. Users can also search for weather information in other locations. The app features a clean and intuitive interface, with dynamic updates based on user input. It utilizes APIs to fetch and display weather data, ensuring accuracy and reliability. Overall, it offers a seamless and informative experience for users to stay updated on weather conditions.'
        },
        {
            name: "Code Blog",
            heading: "Full-Stack Web Application",
            description: "A blog platform for coding enthusiasts to share knowledge, tutorials, and insights.",
            technologies: ["HTML", "Tailwind CSS", "JavaScript", "React", "Express.js", "MongoDB"],
            demoLink: "https://code-blog-4xod.onrender.com/home", // Replace with your actual demo link
            repoLink: "https://github.com/Khushkmwt/code-blog", // Replace with your actual repo link
            image: codeblog, 
            details: "This code blog is a full-stack web application built to foster a community of developers. Users can create and publish blog posts covering various programming topics, from beginner tutorials to advanced techniques. The platform features user authentication, comments, search functionality, and a clean, responsive design. It leverages React for the frontend, Express.js for the backend API, and MongoDB for data storage. The blog aims to be a valuable resource for learning, sharing, and connecting with fellow coders."
        }
        
    ];

    return (
        <section id="projects" className="p-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mt-8 mb-16 pb-14">
            <h2 className="text-3xl font-bold text-gray-100 mb-4 hover:text-green-500">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 pt-6">
                {projects.map((project, index) => (
                    <div key={index} className="relative bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <img src={project.image} alt={project.name} className="rounded-lg shadow-md mb-2 md:mb-4 h-52 w-full object-cover" />
                        <div className="absolute top-0 right-0 bg-teal-500 text-white p-2 md:p-4 rounded-tl-md rounded-br-md">
                            <span className="text-xs md:text-sm font-semibold">{project.heading}</span>
                            <h3 className="text-lg font-bold transition duration-300 hover:text-pink-500">{project.name}</h3>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className="text-sm md:text-base mb-1 text-gray-300">{project.description}</p>
                                <p className="text-xs md:text-sm mb-1 text-gray-500"><strong className="text-gray-100">Technologies:</strong> {project.technologies.join(', ')}</p>
                                <div className="flex space-x-2 md:space-x-4 mt-auto">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-2 md:px-4 py-1 md:py-2 rounded hover:bg-teal-600 text-xs md:text-sm">Demo</a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded hover:bg-blue-600 text-xs md:text-sm">GitHub</a>
                                    <button className="bg-purple-500 text-white px-2 md:px-4 py-1 md:py-2 rounded hover:bg-purple-600 text-xs md:text-sm mt-2 md:mt-0" onClick={() => setSelectedProject(index)}>Show Details</button>
                                </div>
                                
                                {selectedProject === index && (
                                    <div className="bg-gray-200 text-gray-800 p-2 md:p-4 animate-fade-in mt-4">
                                        <p className="md:text-sm mt-2 text-base">
                                            {project.details}
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
