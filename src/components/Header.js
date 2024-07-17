// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div>
                <Link to="/" className="text-xl font-bold">ResApp</Link>
            </div>
            <nav className="flex space-x-4">
                <Link to="/" className="text-gray-700">Home</Link>
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Find a Home
                </Link>
                <button 
                    onClick={() => window.open('/landlord-form', '_blank')} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Contact Landlord
                </button>
            </nav>
        </header>
    );
}

export default Header;
