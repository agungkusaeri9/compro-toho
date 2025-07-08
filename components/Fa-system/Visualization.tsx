"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import Image from 'next/image';
import Cto from '../Section/Cto';

// Visualization products data
const visualizationProducts = [
    {
        id: 6,
        title: "OEE (Overall Equipment Effectiveness)",
        description: "OEE is a key performance indicator (KPI) used to measure and improve the efficiency of manufacturing equipment.",
        icon: "/images/visualization/oee.jpg",
        features: [
            "Visualizing Performance",
            "Production Insight",
            "Increase Competitiveness",
            "Reduce Machinery Cost",
            "Return on Investment (ROI)"
        ]
    },
    {
        id: 1,
        title: "Production Monitoring System",
        description: "A production monitoring system is a comprehensive digital solution designed to track, analyze, and visualize manufacturing processes in real-time.",
        icon: "/images/visualization/production-monitoring.png",
        features: ["Real-time Data Collection", "Data Analysis and Visualization", "Increased Productivity", "mproved Quality Control", "Reduced Costs"]
    },
    {
        id: 2,
        title: "Machine Status Monitoring",
        description: "is a specific application of a production monitoring system, focusing on the real-time tracking and analysis of the operational state, performance, and health of individual machines or equipment within a manufacturing or industrial setting",
        icon: "/images/visualization/machine-status.jpg",
        features: ["Reduce Downtime", "Increase Utilization", "Improve Efficiency", "Enable Predictive Maintenance", "Enhance Decision-Making"]
    },
    {
        id: 3,
        title: "Abnormal Calling",
        description: "in a manufacturing or industrial context typically refers to a system designed to detect, signal, and manage deviations from normal operating conditions or expected performance, often involving human intervention or 'calls' for assistance.",
        icon: "/images/visualization/abnormal.jpg",
        features: ["Rapid Problem Identification", "Immediate Action", "Quality Assurance", "Safety Improvement", "Downtime Reduction"]
    },
    {
        id: 4,
        title: "Delivery Monitoring",
        description: "a system designed to track and manage the movement of goods, materials, or components within a company's own facilities, between different departments, or across internal production stages",
        icon: "/images/visualization/delivery-monitoring.png",
        features: ["Improved Operational Efficiency", "Reduced Production Delays", "Optimized Space Utilization", "Enhanced Inventory Accuracy", "Cost Reduction", "Faster Throughput"]
    },
    {
        id: 5,
        title: "Energy Consumption Monitoring",
        description: "is the process of continuously tracking, measuring, and analyzing the amount of energy (electricity, gas, water, steam, etc.)",
        icon: "/images/visualization/energy.jpg",
        features: ["Cost Reduction", "Enhanced Energy Efficiency", "Predictive Maintenance", "Data-Driven Decision Making", "Regulatory Compliance and Reporting"]
    }
];

// Benefits data
const benefits = [
    {
        id: 1,
        title: "Right Data",
        description: "Get accurate and reliable data with precise volume measurements",
        icon: "📊"
    },
    {
        id: 2,
        title: "Right Time",
        description: "Access real-time information when you need it most",
        icon: "⏰"
    },
    {
        id: 3,
        title: "Right Volume",
        description: "Receive data in the exact quantity and format you require",
        icon: "📈"
    },
    {
        id: 4,
        title: "Export Capability",
        description: "Export data in CSV and Excel formats for further analysis",
        icon: "📁"
    }
];

const VisualizationPageIndex = () => {
    return (
        <div className='mb-20'>
            {/* Hero Section */}
            {/* <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
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
                        <div className="mb-6 inline-block rounded-full bg-blue-100 px-6 py-2 dark:bg-gray-800">
                            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                TOHO's Visualized System
                            </span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
                            "Visualized" <span className="text-blue-600">System</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                            Do you want to control production status at your workplace in real-time?
                            Do you have difficulties making production plans due to unclear production status?
                            <br />
                            <span className="font-semibold text-blue-600">➡ You can solve all above problems with TOHO system.</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
                            >
                                Learn More
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg border-2 border-blue-600 px-8 py-3 text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:text-blue-400"
                            >
                                Request Demo
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div> */}

            {/* Benefits Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "System Benefits",
                            subtitle: "Get the Right Data at the Right Time",
                            description: "If you install TOHO visualized system at your workplace, you can get the 'right data' with 'right volume' at 'right time', and function of exporting data as CSV & Excel format also available.",
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

            {/* Products Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Visualization Products",
                            subtitle: "TOHO's Visualization Solutions",
                            description: "Below are popular examples of Visualized system in our system products. Please check them if you are interested in.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {visualizationProducts.map((product, index) => (
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
                                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800"
                            >
                                <div className="mb-4 flex h-40 w-70 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Image
                                        src={product.icon}
                                        alt={product.title}
                                        width={150}
                                        height={150}
                                        // fill
                                        className="h-full w-full"
                                    />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {product.title}
                                </h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>
                                <ul className="space-y-2">
                                    {product.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
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
                title=" Ready to Transform Your Workplace?"
                description=" You do not need to waste your time for just waiting production reports from your workplace.
                            You do not need to waste your time for just searching history data for making some report.
                            Please use your time more effectively for better operation at your workplace."
            />

        </div>
    );
};

export default VisualizationPageIndex;
