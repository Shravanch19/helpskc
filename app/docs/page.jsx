"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Page = () => {
    useEffect(() => {
        document.body.classList.add("bg-black", "text-white");
    }, []);

    return (
        <div className="mt-[15vh] min-h-screen px-6">
            <Navbar />

            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold text-white mt-10"
            >
                SKC - Automation Simplified
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-400 mt-4 max-w-xl"
            >
                Automate your system and project setup effortlessly with SKC.
            </motion.p>

            <section className="mt-10">
                <h2 className="text-lg font-semibold text-cyan-400">Features</h2>
                <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    {["Flask Boilerplate", "Next.js Boilerplate", "Virtual Environment", "System Info Retrieval"].map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-3 rounded-lg">{feature}</div>
                    ))}
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-lg font-semibold text-cyan-400">Installation</h2>
                <div className="bg-gray-900 p-4 rounded-lg mt-3 text-sm font-mono text-green-400">
                    <p>$ git clone https://github.com/Shravanch19/skchelp.git</p>
                </div>
                <p className="mt-2 text-sm">Run the setup script:</p>
                <pre className="bg-gray-900 p-3 rounded-lg text-sm font-mono text-green-400 overflow-x-auto">
                    <code>$ setup.bat</code>
                </pre>
            </section>

            <section className="mt-10">
                <h2 className="text-lg font-semibold text-cyan-400">Usage</h2>
                <p className="mt-3 text-sm">Run SKC with the desired task:</p>
                <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono text-green-400">
                    <p>$ skc [task]</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    {["skc flask", "skc next", "skc venv", "skc system"].map((command, index) => (
                        <div key={index} className="bg-gray-800 p-3 rounded-lg font-mono text-green-400">$ {command}</div>
                    ))}
                </div>
            </section>

            <section className="mt-10 mb-10">
                <h2 className="text-lg font-semibold text-cyan-400">Contribute</h2>
                <p className="text-gray-300 text-sm">Fork and submit a pull request on GitHub.</p>
            </section>

        </div>
    );
};

export default Page;