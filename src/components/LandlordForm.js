// src/components/LandlordForm.js

import React, { useState } from 'react';

const LandlordForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to your server
        console.log({
            title,
            description,
            price,
            bedrooms,
            bathrooms,
            images
        });
        alert('Property submitted successfully!');
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl mb-6">Submit Your Gorgeous Property</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        className="w-full p-2 border rounded" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        id="description" 
                        className="w-full p-2 border rounded" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per month</label>
                    <input 
                        type="number" 
                        id="price" 
                        className="w-full p-2 border rounded" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Number of Bedrooms</label>
                    <input 
                        type="number" 
                        id="bedrooms" 
                        className="w-full p-2 border rounded" 
                        value={bedrooms} 
                        onChange={(e) => setBedrooms(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Number of Bathrooms</label>
                    <input 
                        type="number" 
                        id="bathrooms" 
                        className="w-full p-2 border rounded" 
                        value={bathrooms} 
                        onChange={(e) => setBathrooms(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Property Images</label>
                    <input 
                        type="file" 
                        id="images" 
                        className="w-full p-2 border rounded" 
                        multiple 
                        onChange={handleImageChange} 
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Property</button>
            </form>
        </div>
    );
}

export default LandlordForm;
