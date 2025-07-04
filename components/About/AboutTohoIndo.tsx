"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { getProfileTohoIndo } from '@/services/ApiService';
import Image from 'next/image';
import { AboutSkeleton } from '../Skeleton/AboutSkeleton';


const AboutTohoIndo = () => {
    const { data: profile, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await getProfileTohoIndo();
            return response.data;
        }
    });

    return (
        <div className='mb-20'>
            <div className="mb-20">
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
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default AboutTohoIndo;
