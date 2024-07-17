import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to find your perfect student home?</h2>
                <p className="text-gray-600 mb-6">Browse our listings and contact landlords to book viewings.</p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Find a Home</button>
                    <button className="bg-white text-black border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 transition">Contact Landlords</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
