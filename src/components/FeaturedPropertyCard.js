import React from 'react';

const FeaturedPropertyCard = ({ property }) => {
    return (
        <div className="flex items-center space-x-4 mb-4">
            <div className="h-16 w-16 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
            </div>
            <div>
                <h3 className="text-sm font-bold">{property.title}</h3>
                <p className="text-sm text-gray-600">${property.price}/month</p>
            </div>
        </div>
    );
}

export default FeaturedPropertyCard;
