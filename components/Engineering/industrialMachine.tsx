"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

// TOHO made machines data
const tohoMadeMachines = [
    {
        id: 1,
        title: "Inspection Machine",
        description: "Advanced inspection system with sensor-based outer diameter measurement",
        icon: "/images/icon/icon-01.svg",
        features: [
            "Inspect Outer Diameter by Sensor",
            "OK/NG value & Check frequency set by PLC",
            "Data Logging available by connect to PC"
        ]
    },
    {
        id: 2,
        title: "Cutting Machine",
        description: "Automated cutting system for precise material processing",
        icon: "/images/icon/icon-02.svg",
        features: [
            "Auto-cutting material by each specification",
            "Specification setting by PLC",
            "Data Logging available by connect to PC"
        ]
    },
    {
        id: 3,
        title: "Pre-heat cabinet",
        description: "It heats molds before they go onto the production machine, saving time and improving product quality by making the machine ready to produce fast ",
        icon: "/images/icon/icon-02.svg",
        features: [
            "Auto-cutting material by each specification",
            "Specification setting by PLC",
            "Data Logging available by connect to PC"
        ]
    }
];

// TOHO group machines data
const tohoGroupMachines = [
    {
        id: 1,
        title: "Vacuum Sealer M/C",
        description: "Advanced vacuum sealing machine for industrial packaging applications",
        icon: "/images/icon/icon-03.svg",
        features: ["Industrial vacuum sealing", "High-speed operation", "Quality assurance", "Automated packaging"]
    },
    {
        id: 2,
        title: "PCN Print Cleaner M/C",
        description: "Specialized cleaning machine for PCN print applications",
        icon: "/images/icon/icon-04.svg",
        features: ["PCN print cleaning", "Precision cleaning", "Automated process", "Quality control"]
    }
];

// Services data
const services = [
    {
        id: 1,
        title: "Concept & Design",
        description: "Complete machine design from concept to detailed specifications",
        icon: "🎨"
    },
    {
        id: 2,
        title: "Production",
        description: "Manufacturing of custom industrial machines with quality control",
        icon: "🏭"
    },
    {
        id: 3,
        title: "Installation",
        description: "Professional installation and setup at your workplace",
        icon: "🔧"
    },
    {
        id: 4,
        title: "Commisioning",
        description: "Toho guarantee 100% running and after sales services",
        icon: "📋"
    }
];

// Key advantages
const advantages = [
    {
        id: 1,
        title: "Japanese Quality",
        description: "Produce machines with japanese quality and combining various FA maker units",
        icon: "⚙️"
    },
    {
        id: 2,
        title: "Progressive Technology",
        description: "TOHO group offers progressive machines in industrial market",
        icon: "🚀"
    },
    {
        id: 3,
        title: "Complete Solutions",
        description: "From specification to installation at your workplace",
        icon: "✅"
    }
];

const IndustrialPageIndex = () => {
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
                                TOHO Industrial Solutions
                            </span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
                            Industrial <span className="text-blue-600">Machine</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                            We are available to produce single machine with combining various FA maker unit, which we cover from the concept & design - prod. - installation.
                            <br />
                            <span className="font-semibold text-blue-600">TOHO group is available progressive machine in industrial market.</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
                            >
                                Get Quote
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg border-2 border-blue-600 px-8 py-3 text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:text-blue-400"
                            >
                                Request Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div> */}

            {/* Services Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Complete Industrial Solutions",
                            subtitle: "From Concept to Installation",
                            description: "TOHO Technology Indonesia stands as main contractor to look after from summarizing the specification & concepts until installation the machine at your workplace.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
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
                                <div className="mb-4 text-4xl">{service.icon}</div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Key Advantages Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Why Choose TOHO Industrial Machines",
                            subtitle: "Advantages of Our Industrial Solutions",
                            description: "Experience the benefits of working with TOHO for all your industrial machine needs.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={advantage.id}
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
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <span className="text-3xl">{advantage.icon}</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {advantage.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TOHO Made Machines Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "TOHO Made Machines",
                            subtitle: "Custom Industrial Solutions",
                            description: "Specialized machines designed and manufactured by TOHO for specific industrial applications.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {tohoMadeMachines.map((machine, index) => (
                            <motion.div
                                key={machine.id}
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
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Image
                                        src={machine.icon}
                                        alt={machine.title}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                                    {machine.title}
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    {machine.description}
                                </p>
                                <ul className="space-y-3">
                                    {machine.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TOHO Group Machines Section */}
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "TOHO Group Made Machines",
                            subtitle: "Progressive Industrial Technology",
                            description: "Advanced machines from TOHO Technology Corp. for industrial applications.",
                        }}
                    />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {tohoGroupMachines.map((machine, index) => (
                            <motion.div
                                key={machine.id}
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
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Image
                                        src={machine.icon}
                                        alt={machine.title}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                                    {machine.title}
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    {machine.description}
                                </p>
                                <ul className="space-y-3">
                                    {machine.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
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
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <motion.div
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
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            Ready for Industrial Innovation?
                        </h2>
                        <p className="mb-8 text-lg opacity-90">
                            Transform your industrial operations with TOHO's custom machines and progressive technology.
                            From concept to installation, we provide complete solutions tailored to your specific needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-white px-8 py-3 text-blue-600 transition-all hover:bg-gray-100"
                            >
                                Get Free Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg border-2 border-white px-8 py-3 text-white transition-all hover:bg-white hover:text-blue-600"
                            >
                                Contact Sales
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialPageIndex;
