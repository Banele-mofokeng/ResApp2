import React, { useState } from 'react';

const Search = () => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Function to handle search logic
        console.log(`Searching for location: ${location}`);
        // Make an API call to your Django backend here
    }

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search by location"
                className="p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleSearch}
                className="p-2 bg-black text-white rounded-md"
            >
                Search
            </button>
        </div>
    );
}

export default Search;
