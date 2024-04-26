import React,{useState} from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section id="contact" className="p-4 bg-gray-900 text-white mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true" className="bg-gray-800 p-8 rounded-lg shadow-md w-2/3 mx-auto mt-8 mb-8">
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input id="name" type='text' name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Send Message</button>
            </form>
        </section>
    );
};
