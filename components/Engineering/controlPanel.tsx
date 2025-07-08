"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Cto from "../Section/Cto";
import { useState } from "react";

// Control Panel services data
const controlPanelServices = [
    {
        id: 1,
        title: "New Panel Manufacturing",
        description: "Custom control panel design and manufacturing for your specific requirements",
        icon: "🏭",
        features: ["Custom design", "Quality manufacturing", "Local production", "Cost optimization"]
    },
    {
        id: 2,
        title: "Panel Renewal",
        description: "Upgrade and modernize existing control panels to current standards",
        icon: "🔄",
        features: ["Old to new conversion", "Component replacement", "System modernization", "Performance upgrade"]
    },
    {
        id: 3,
        title: "Component Replacement",
        description: "Replace outdated components with modern, reliable alternatives",
        icon: "⚙️",
        features: ["Parts replacement", "Compatibility testing", "Quality assurance", "Reliability improvement"]
    },
    {
        id: 4,
        title: "After-Sales Service",
        description: "Localized maintenance and support services in Indonesia",
        icon: "🔧",
        features: ["Local support", "Preventive maintenance", "Emergency repairs", "Technical assistance"]
    }
];

// Control Panel examples
const controlPanelExamples = [
    {
        id: 1,
        image: "/images/control-panel/cp1.jpg",
    },
    {
        id: 2,
        image: "/images/control-panel/cp2.jpg",
    },
    {
        id: 3,
        image: "/images/control-panel/cp3.jpg",
    },
    {
        id: 4,
        image: "/images/control-panel/cp4.jpg",
    },
    {
        id: 5,
        image: "/images/control-panel/cp5.jpg",
    },
    {
        id: 6,
        image: "/images/control-panel/cp6.jpg",
    },
];

// Common problems solved
const problemsSolved = [
    {
        id: 1,
        title: "Minimize Cost",
        description: "Significantly reduce your manufacturing expenses by producing control panels locally in Indonesia, eliminating high import and logistics costs.",
        icon: "💰"
    },
    {
        id: 2,
        title: "One Stop Solution",
        description: "Enjoy hassle-free after-sales service and maintenance with our local Indonesian support team, ensuring quick response and minimal downtime.",
        icon: "🏠"
    },
    {
        id: 3,
        title: "Japanese Quality",
        description: "Benefit from Japanese engineering standards and expertise, even when upgrading or refurbishing older machines for optimal performance.",
        icon: "🇯🇵"
    },
    {
        id: 4,
        title: "World Wide Maker Product",
        description: "Access globally recognized replacement parts and solutions, overcoming limitations of support from overseas suppliers and ensuring continuous operation.",
        icon: "📦"
    }
];

const ControlPanelPageIndex = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='mb-20'>
            {/* Hero Section */}
            {/* <div className="relative bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="mb-6 inline-block rounded-full bg-orange-100 px-6 py-2 dark:bg-gray-800">
                            <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                                TOHO's One-Stop Solution
                            </span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
                            Control <span className="text-orange-600">Panel</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                            We are available for making new panel, and also available for re-newing current panel.
                            <br />
                            <span className="font-semibold text-orange-600">If you have difficulties with above matters, please contact to us</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-orange-600 px-8 py-3 text-white transition-all hover:bg-orange-700"
                            >
                                Get Quote
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg border-2 border-orange-600 px-8 py-3 text-orange-600 transition-all hover:bg-orange-600 hover:text-white dark:text-orange-400"
                            >
                                Request Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div> */}

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
                            <div className="mb-4 text-4xl">Step-1</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Spec Overall
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We thoroughly analyze your requirements to provide the most suitable control panel specifications, ensuring optimal performance and cost-effectiveness for your operations
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                        >
                            <div className="mb-4 text-4xl">Step-2</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Design Develop
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our experienced engineers design and develop control panels tailored to your needs, utilizing the latest technology and international standards for reliability and safety.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                        >
                            <div className="mb-4 text-4xl">Step-3</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Material Prepare
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We source high-quality materials and components from trusted global brands, guaranteeing durability, compatibility, and long-term support for your control panels.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                        >
                            <div className="mb-4 text-4xl">Step-4</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Production & Inspection
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our production process follows strict quality control and inspection procedures, ensuring every control panel meets rigorous standards before delivery to your facility.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                        >
                            <div className="mb-4 text-4xl">Step-5</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Installation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our skilled technicians handle the installation process efficiently and safely, minimizing downtime and ensuring seamless integration with your existing systems.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                        >
                            <div className="mb-4 text-4xl">Step-6</div>
                            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                Commisioning
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We provide comprehensive commissioning services, including testing and fine-tuning, to ensure your control panels operate flawlessly and deliver maximum value from day one.
                            </p>
                        </motion.div>
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
