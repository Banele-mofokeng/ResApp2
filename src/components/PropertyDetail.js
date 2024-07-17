import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = ({ properties }) => {
    const { id } = useParams();
    const property = properties.find(prop => prop.id.toString() === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row space-x-6">
                <div className="flex-1">
                    <img src={property.images[0]} alt={property.title} className="w-full h-auto mb-6" />
                    <div className="grid grid-cols-2 gap-4">
                        {property.images.slice(1).map((img, index) => (
                            <img key={index} src={img} alt={`${property.title} ${index}`} className="w-full h-auto" />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    <p className="text-gray-600 mb-4">{property.details}</p>
                    <div className="text-2xl font-bold mb-4">${property.price}/month</div>
                    <div className="text-xl mb-4">Rating: {property.rating} ({property.reviews} reviews)</div>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold">Property overview:</span>
                            <ul className="list-disc pl-5">
                                {property.propertyOverview.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold">Rooms:</span>
                            <ul className="list-disc pl-5">
                                {property.rooms.map((room, index) => (
                                    <li key={index}>{room}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold">Amenities:</span>
                            <ul className="list-disc pl-5">
                                {property.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold">Policies:</span>
                            <ul className="list-disc pl-5">
                                {property.policies.map((policy, index) => (
                                    <li key={index}>{policy}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
