import React, { useState } from 'react';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isSignUp ? "Sign Up" : "Login"}
                </h2>
                <form>
                    {isSignUp && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 hover:underline">
                        {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;
