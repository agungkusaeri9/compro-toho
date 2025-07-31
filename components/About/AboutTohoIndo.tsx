"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { getProfileTohoIndo } from '@/services/ApiService';
import { AboutSkeleton } from '../Skeleton/AboutSkeleton';
import OfficeLocation from '../Office/OfficeLocation';
import VissionMission from './VisioMission';


const AboutTohoIndo = () => {
    const { data: profile, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await getProfileTohoIndo();
            return response.data;
        }
    });

    return (
        <>
            <div className="py-16 px-4 md:px-10">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-5">
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -10,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="animate_top"
                    >
                        <SectionHeader
                            headerInfo={{
                                title: `About ${profile?.name}`,
                                subtitle: "Innovative IT and IoT Solutions for Your Business",
                                description: `We are a technology company committed to delivering innovative and reliable IT and IoT solutions tailored to meet your business needs. With a strong focus on quality, efficiency, and customer satisfaction, we help organizations transform and thrive in the digital era.`,
                            }}
                        />

                    </motion.div>
                </div>

                {isLoading ? (
                    <AboutSkeleton />
                ) : (
                    <div className='mt-10'>
                        <div className="grid gap-10 md:grid-cols-2">
                            <motion.div
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: -20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="animate_left relative mx-auto items-center hidden md:block max-w-md"
                            >
                                {/* <div className="relative w-full h-[400px]"> */}
                                <img
                                    src={profile?.image_url}
                                    alt={profile?.name}
                                    className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                                // fill
                                />
                                {/* </div> */}
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: -20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="animate_right relative mx-auto items-center hidden md:block"
                            >
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    {profile?.description}
                                </p>

                                <table className="min-w-[300px] mt-4 rounded overflow-hidden border-collapse">
                                    <tbody>
                                        <tr>
                                            <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Established</th>
                                            <td className="px-3 py-2 border border-gray-400">November 2012</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Employee</th>
                                            <td className="px-3 py-2 border border-gray-400">Japanese x1, Indonesian x10</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Capital</th>
                                            <td className="px-3 py-2 border border-gray-400">USD 300,000</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </motion.div>
                        </div>
                    </div>
                )
                }
            </div >
            <VissionMission />
            <OfficeLocation />
        </>
    );
};

export default AboutTohoIndo;
