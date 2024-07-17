
import React from 'react';
import Search from './Search';

const Hero = () => {
    return (
        <section className="flex justify-center items-center text-center bg-gray-100 py-20">
            <div className="w-[1200px] aspect-w-16 aspect-h-9 bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Find Your Perfect Student Home</h1>
                <p className="text-lg mb-6">Search and book your ideal student accommodation near campus.</p>
                <Search />
            </div>
        </section>
    );
}

export default Hero;