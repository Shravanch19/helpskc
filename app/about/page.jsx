"use client";
import React from 'react'
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';

const page = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-12">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    About This Tool
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    This tool is a <b>powerful command-line automation assistant</b> designed to streamline <b>project setup, scripting, and daily system tasks</b>.
                    Whether you need to <b>generate project templates, automate workflows, or integrate advanced functions</b>, this tool has you covered.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mt-12 max-w-3xl text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    About the Developer
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    Hi, I’m <b>Shravan</b>, a <b>full-stack developer</b> currently pursuing <b>BCA in Data Science at GLA University</b>.
                    My passion lies in <b>DevOps, cloud computing, and building scalable web applications</b>.
                    With experience in <b>Next.js, Flask, Django, and AWS</b>, I aim to <b>bridge development and operations</b> to create seamless, efficient solutions.
                </p>
                <p className="mt-9 text-lg text-gray-400 italic">
                    <i>“Building tools that make life easier, one command at a time.”</i>
                </p>
            </motion.div>
        </div>
    )
}

export default page