import React from 'react';
import { Link } from 'react-router-dom';

const PropertyList = ({ properties }) => {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <Link to={`/property/${property.id}`} key={property.id} className="block">
                        <div className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-200 h-48 w-full" style={{ backgroundImage: `url(${property.images[0]})`, backgroundSize: 'cover' }}></div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{property.title}</h3>
                                <p className="text-gray-600">{property.description}</p>
                                <p className="text-gray-900 font-bold">${property.price}/month</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PropertyList;
