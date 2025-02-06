"use client";
import { React, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Link from "next/link";

const Home = () => {
    useEffect(() => {
        document.body.classList.add("bg-black", "text-white");
    }, []);
    

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Floating Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen relative bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>

            {/* Floating Glowy Circles */}
            <div className="absolute top-16 left-16 w-48 h-48 bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-48 h-48 bg-cyan-400 opacity-20 blur-3xl animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center relative z-10 px-6 min-h-[60vh] sm:min-h-fit "
            >
                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg font-semibold text-cyan-400"
                >
                    Power Up Your Development
                </motion.p>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg">
                    Automate Everything
                </h1>

                {/* Description */}
                <p className="mt-6 mb-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    A powerful CLI tool to simplify your development workflow with ease and speed.
                    <br />
                    SKC is a lightweight command-line tool designed to help developers automate common system and project setup tasks.
                </p>

                {/* Call-to-Action Buttons */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 flex gap-4 justify-center"
                >
                    <Link 
                        href="/docs" 
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white text-lg shadow-lg transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                    <Link 
                        href="https://portfolio-shravan-s-projects-f0f07f2c.vercel.app/" 
                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 transition-all rounded-lg text-white text-lg shadow-lg transform hover:scale-105"
                    >
                        Contact
                    </Link>
                </motion.div>
            </motion.div>
        </section>
        </div>
    );
}

export default Home
