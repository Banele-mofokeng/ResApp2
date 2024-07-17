import React from 'react';
import FeaturedPropertyCard from './FeaturedPropertyCard';

const FeaturedProperties = ({ properties }) => {
    return (
        <aside className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Featured Properties</h2>
            {properties.map(property => (
                <FeaturedPropertyCard key={property.id} property={property} />
            ))}
        </aside>
    );
}

export default FeaturedProperties;
