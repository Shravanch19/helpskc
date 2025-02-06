"use client";
import { React, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    useEffect(() => {
        document.body.classList.add("bg-black", "text-white");
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    className="fixed top-[2.5vh] left-[10vw] sm:left-1/4 w-3/4 sm:w-1/2 p-4 rounded-2xl bg-opacity-30 backdrop-blur-xl border border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-50"
                >
                    <div className="relative container mx-auto flex justify-evenly items-center">
                        {["Dashboard", "Docs", "About"].map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute inset-0 w-full h-full rounded-lg bg-blue-500 opacity-20 blur-lg"
                                            layoutId="hoverEffect"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        />
                                    )}
                                </AnimatePresence>
                                <Link href={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}>
                                    <motion.a
                                        className="relative text-gray-300 hover:text-white transition px-4 py-2 text-sm sm:text-lg sm:font-medium"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item}
                                    </motion.a>
                                </Link>
                            </div>
                        ))}
                        <Link href="https://portfolio-shravan-s-projects-f0f07f2c.vercel.app/">
                            <motion.a
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0px 0px 20px rgba(0, 183, 255, 0.7)",
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="relative px-2 sm:px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition rounded-lg text-white shadow-md sm:text-base text-sm"
                            >
                                Contact
                            </motion.a>
                        </Link>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
