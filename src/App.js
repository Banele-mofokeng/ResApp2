import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSidebar from './components/FilterSidebar';
import PropertyList from './components/PropertyList';
import FeaturedProperties from './components/FeaturedProperties';
import Footer from './components/Footer';
import Login from './components/Login';
import PropertyDetail from './components/PropertyDetail';
import LandlordForm from './components/LandlordForm';

const App = () => {
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: "Cozy Studio Apartment",
            description: "1 Bedroom, 1 Bath",
            price: 800,
            details: "This cozy studio apartment offers a comfortable living space with one bedroom and one bath. Perfect for students!",
            images: ["/images/cozy1.jpg", "/images/cozy2.jpg"],
            propertyOverview: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            reviews: 1920,
            rating: 9.6,
            rooms: ["1 Bedroom", "1 Bath"],
            amenities: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            policies: ["No smoking", "No pets allowed"]
        },
        {
            id: 2,
            title: "Spacious 2-Bedroom Apartment",
            description: "2 Bedrooms, 1 Bath",
            price: 1200,
            details: "A spacious 2-bedroom apartment suitable for small families or roommates.",
            images: ["/images/spacious1.jpg", "/images/spacious2.jpg"],
            propertyOverview: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            reviews: 1800,
            rating: 9.2,
            rooms: ["2 Bedrooms", "1 Bath"],
            amenities: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            policies: ["No smoking", "No pets allowed"]
        },
        {
            id: 3,
            title: "Luxury 3-Bedroom Townhouse",
            description: "3 Bedrooms, 2 Baths",
            price: 1800,
            details: "Luxury 3-bedroom townhouse with modern amenities and spacious rooms.",
            images: ["/images/luxury1.jpg", "/images/luxury2.jpg"],
            propertyOverview: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            reviews: 2000,
            rating: 9.8,
            rooms: ["3 Bedrooms", "2 Baths"],
            amenities: ["Free Wifi", "Central heating", "Private bathroom", "Key card access"],
            policies: ["No smoking", "No pets allowed"]
        },
    ]);

    const featuredProperties = properties.slice(0, 3);

    const handleApplyFilters = (filters) => {
        console.log("Filters applied:", filters);
        // Implement the logic to filter properties based on the filters
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                        <>
                            <Hero />
                            <div className="p-6 flex space-x-6">
                                <FilterSidebar onApplyFilters={handleApplyFilters} />
                                <PropertyList properties={properties} />
                                <FeaturedProperties properties={featuredProperties} />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/property/:id" element={<PropertyDetail properties={properties} />} />
                    <Route path="/landlord-form" element={<LandlordForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
