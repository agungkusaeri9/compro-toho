"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import Image from 'next/image';
import Cto from '../Section/Cto';

// Digitalization products data
const digitalizationProducts = [
    {
        id: 1,
        title: "WMS (Warehouse Management System)",
        description: "A smart solution for managing warehouse operations, enabling real-time inventory tracking, automated stock control, and efficient order fulfillment.",
        icon: "/images/digitalization/dg-wms.png",
        features: ["Real-time inventory tracking", "Automated stock control", "Low stock alerts", "Inventory optimization"]
    },
    {
        id: 2,
        title: "Quality Record Digitalization",
        description: "Digitize and centralize all quality records for easy access, improved traceability, and enhanced compliance with industry standards.",
        icon: "/images/icon/icon-02.svg",
        features: ["Digital quality records", "Process standardization", "Quality metrics tracking", "Compliance management"]
    },
    {
        id: 3,
        title: "Traceability System",
        description: "Track and trace every product and component throughout the supply chain, ensuring transparency, accountability, and quick recall management.",
        icon: "/images/icon/icon-02.svg",
        features: ["End-to-end product tracking", "Batch and lot traceability", "Recall management", "Regulatory compliance"]
    },
    {
        id: 4,
        title: "Measurement Digitalization",
        description: "Automate and digitize measurement data collection for improved accuracy, real-time monitoring, and seamless integration with quality systems.",
        icon: "/images/icon/icon-02.svg",
        features: ["Automated data capture", "Real-time monitoring", "Data integration", "Improved measurement accuracy"]
    },
    {
        id: 5,
        title: "Maintenance Record Digitalization",
        description: "Transform maintenance management with digital records, enabling proactive scheduling, quick access to history, and reduced equipment downtime.",
        icon: "/images/icon/icon-02.svg",
        features: ["Digital maintenance logs", "Proactive scheduling", "Quick access to history", "Downtime reduction"]
    },
];

// Benefits data
const benefits = [
    {
        id: 1,
        title: "Eliminate Manual Stock Taking",
        description: "No more wasting time on manual inventory checks and stock counting",
        icon: "📦"
    },
    {
        id: 2,
        title: "Digital History Data",
        description: "Access historical data instantly without searching through paper files",
        icon: "📊"
    },
    {
        id: 3,
        title: "Paperless Operations",
        description: "No more worries about paper file storage locations and retention periods",
        icon: "🌱"
    },
    {
        id: 4,
        title: "ISO Compliance",
        description: "Meet ISO requirements with digital documentation and automated processes",
        icon: "✅"
    }
];

// Factory IoT features
const factoryIoTFeatures = [
    {
        id: 1,
        title: "Real-time Monitoring",
        description: "Monitor factory operations in real-time with IoT sensors and data collection",
        icon: "📡"
    },
    {
        id: 2,
        title: "Automated Data Collection",
        description: "Automatically collect and process data from various factory systems",
        icon: "🤖"
    },
    {
        id: 3,
        title: "Predictive Analytics",
        description: "Use AI and machine learning for predictive maintenance and optimization",
        icon: "🧠"
    },
    {
        id: 4,
        title: "Smart Alerts",
        description: "Receive intelligent alerts for anomalies and performance issues",
        icon: "🔔"
    }
];

const DigitalizationPageIndex = () => {
    return (
        <div className='mb-20'>
            {/* Hero Section */}

            {/* Benefits Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Digitalization Benefits",
                            subtitle: "Transform Your Operations with Digital Solutions",
                            description: "If you install TOHO digitalization system at your workplace, you can get the 'right data' with 'right volume' at 'right time', and function of exporting data as CSV & Excel format also available.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.id}
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
                                <div className="mb-4 text-4xl">{benefit.icon}</div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Factory IoT Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Factory IoT",
                            subtitle: "Advancing Factory Data Digitalization to IoT",
                            description: "Transform your factory operations with IoT technology and digital data management solutions.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {factoryIoTFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.id}
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
                                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800"
                            >
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Digitalization Products",
                            subtitle: "TOHO's Digitalization Solutions",
                            description: "Below are popular examples of Digitalized system in our system products. Please check them if you are interested in.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {digitalizationProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
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
                                className="group rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                    <Image
                                        src={product.icon}
                                        alt={product.title}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                                    {product.title}
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>
                                <ul className="space-y-3">
                                    {product.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-3 h-2 w-2 rounded-full bg-green-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <Cto
                title="Ready to Go Digital?"
                description=" You do not need to waste your time for just waiting production reports from your workplace.
                            You do not need to waste your time for just searching history data for making some report.
                            You do not need to worry about 'Paper file' save-location & save-period due to ISO issue.
                            Please use your time more effectively for better operation at your workplace."
            />
        </div>
    );
};

export default DigitalizationPageIndex;
