import React from 'react';

const PropertyCard = ({ property }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
            </div>
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-gray-600">{property.description}</p>
            <p className="text-black font-bold mt-2">${property.price}/month</p>
        </div>
    );
}

export default PropertyCard;
