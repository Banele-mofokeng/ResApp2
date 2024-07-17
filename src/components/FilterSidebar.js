import React, { useState } from 'react';

const FilterSidebar = ({ onApplyFilters }) => {
    const [location, setLocation] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [bedrooms, setBedrooms] = useState('');

    const handleApplyFilters = () => {
        onApplyFilters({ location, minPrice, maxPrice, bedrooms });
    }

    return (
        <aside className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Enter location" 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price Range</label>
                <div className="flex space-x-2">
                    <input 
                        type="number" 
                        value={minPrice} 
                        onChange={(e) => setMinPrice(e.target.value)} 
                        placeholder="Min" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    <input 
                        type="number" 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(e.target.value)} 
                        placeholder="Max" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                <select 
                    value={bedrooms} 
                    onChange={(e) => setBedrooms(e.target.value)} 
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>
            <button 
                onClick={handleApplyFilters} 
                className="p-2 w-full bg-black text-white rounded-md"
            >
                Apply Filters
            </button>
        </aside>
    );
}

export default FilterSidebar;
