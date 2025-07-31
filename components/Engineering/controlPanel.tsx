"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Cto from "../Section/Cto";
import { useState } from "react";
import { ControlPanelExamplesData, ControlPanelProblemsSolved, ControlPanelServicesData, ControlPanelStopSolutionsData } from "@/data/ControlPanelData";

// Control Panel services data
const controlPanelServices = ControlPanelServicesData;

// Control Panel examples
const controlPanelExamples = ControlPanelExamplesData;

// Common problems solved
const problemsSolved = ControlPanelProblemsSolved;

const controlOneStopSolutions = ControlPanelStopSolutionsData;

const ControlPanelPageIndex = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='mb-20'>
            {/* Problems Solved Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Common Control Panel Benefit",
                            subtitle: "Solutions for Your Control Panel Challenges",
                            description: "We understand the challenges you face with control panels and offer comprehensive solutions to address your specific needs.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {problemsSolved.map((problem, index) => (
                            <motion.div
                                key={problem.id}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                            >
                                <div className="mb-4 text-4xl">{problem.icon}</div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {problem.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Control Panel Services",
                            subtitle: "Comprehensive Control Panel Solutions",
                            description: "From new panel manufacturing to renewal and maintenance, we provide complete control panel solutions tailored to your needs.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {controlPanelServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 30,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800"
                            >
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                                    <span className="text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Control Panel Examples */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Control Panel Examples",
                            subtitle: "TOHO's Control Panel Solutions",
                            description: "See examples of our control panel transformations and multi-maker compatibility solutions.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {controlPanelExamples.map((example, index) => (
                            <motion.div
                                key={example.id + index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 group cursor-pointer"
                                onClick={() => {
                                    setSelectedImage(example.image);
                                    setShowModal(true);
                                }}
                            >
                                <Image
                                    src={example.image}
                                    alt={"Control Panel Examples "}
                                    width={400}
                                    height={300}
                                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    {/* Example: Eye icon (SVG) */}
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Why Choose TOHO Control Panels",
                            subtitle: "One Stop Solutions",
                            description: "Experience the benefits of working with TOHO for all your control panel needs.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {controlOneStopSolutions?.map((data, index) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                            >
                                <div className="mb-4 text-4xl">{data.title}</div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {data.sub_title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {data.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <Cto
                title="  Ready to Upgrade Your Control Panel?"
                description="  Whether you need a new control panel, want to renew your existing one, or need component replacements,
                            TOHO provides comprehensive solutions with local production and support in Indonesia."
            />

            {/* Modal Gambar Besar */}
            <AnimatePresence>
                {showModal && selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[99999] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop blur */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />
                        {/* Modal Image */}
                        <motion.div
                            className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 max-w-3xl w-[90vw] max-h-[90vh] shadow-2xl z-10 mx-2 flex flex-col"
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 40 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-3xl"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <div className="flex-1 flex items-center justify-center">
                                <Image
                                    src={selectedImage}
                                    alt="Control Panel Example"
                                    width={900}
                                    height={600}
                                    className="max-h-[80vh] w-auto h-auto object-contain rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ControlPanelPageIndex;
