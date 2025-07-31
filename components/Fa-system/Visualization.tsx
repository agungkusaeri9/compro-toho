"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import Image from 'next/image';
import Cto from '../Section/Cto';
import { VisualizationBenefits, VisualizationProductData } from '@/data/VisualizationData';

const visualizationProducts = VisualizationProductData;
const benefits = VisualizationBenefits;

const VisualizationPageIndex = () => {
    return (
        <div className='mb-20'>
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
