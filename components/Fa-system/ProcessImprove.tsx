"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import Image from 'next/image';
import Cto from '../Section/Cto';
import { ProcessImprovementApproaches, ProcessImprovementBenefits, ProcessImprovementSolutionsData } from '@/data/ProcessImprovementData';


const processImprovementSolutions = ProcessImprovementSolutionsData;
const benefits = ProcessImprovementBenefits;
const approaches = ProcessImprovementApproaches;

const ProcessImprovePageIndex = () => {
    return (
        <div className='mb-20'>
            {/* Benefits Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Process Improvement Benefits",
                            subtitle: "Transform Your Operations with Automation",
                            description: "If those process that does not need any skills or experience, there are obviously strong demand on reducing numbers of operators. If those process that needs to rely on operators to judge products quality, you are always required to keep your eyes on the process work to achieve QCDS performance.",
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

            {/* Software & Hardware Approaches */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Software & Hardware Solutions",
                            subtitle: "Comprehensive Process Improvement Approaches",
                            description: "We, TOHO, can offer you with both 'Software' & 'Hardware' approaches for you to solve above problems.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {approaches.map((approach, index) => (
                            <motion.div
                                key={approach.id}
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
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <span className="text-4xl">{approach.icon}</span>
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                                    {approach.title}
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    {approach.description}
                                </p>
                                <ul className="space-y-3">
                                    {approach.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-3 h-2 w-2 rounded-full bg-purple-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Process Improvement Solutions",
                            subtitle: "TOHO's Process Improvement Solutions",
                            description: "Below are popular examples of Process Improvement solutions in our system products. Please check them if you are interested in.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {processImprovementSolutions.map((solution, index) => (
                            <motion.div
                                key={solution.id}
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
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Image
                                        src={solution.icon}
                                        alt={solution.title}
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {solution.title}
                                </h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    {solution.description}
                                </p>
                                <ul className="space-y-2">
                                    {solution.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></span>
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
                title="Ready to Improve Your Processes?"
                description="Transform your operations with TOHO's comprehensive process improvement solutions.
                            Reduce labor costs, standardize processes, and achieve better QCDS performance with our
                            software and hardware automation solutions."
            />
        </div>
    );
};

export default ProcessImprovePageIndex;
