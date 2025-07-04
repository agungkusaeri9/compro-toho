"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { AboutSkeleton } from '../Skeleton/AboutSkeleton';
import { getProfileTohoJapan } from '@/services/ApiService';


const AboutTohoJp = () => {
    const { data: profile, isLoading } = useQuery({
        queryKey: ["profileJapan"],
        queryFn: async () => {
            const response = await getProfileTohoJapan();
            return response.data;
        }
    });

    return (
        <>
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
                            subtitle: "Leading Innovation from Our Headquarters",
                            description: `As the central hub of ${profile?.name}, our headquarters is where innovation, strategy, and cutting-edge technology come together. From here, we lead the development of reliable IT and IoT solutions tailored to meet the needs of clients across various industries. Our commitment to excellence begins at the core — where ideas turn into impactful solutions.`,
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
                        className="animate_left relative mx-auto items-center hidden md:block max-w-2xl"
                    >
                        <div className="grid grid-cols-1 gap-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                            {profile?.image_urls && profile.image_urls.length > 0 && (
                                <>
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <img
                                            src={profile.image_urls[0]}
                                            alt={`${profile?.name} - Image 1`}
                                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {profile.image_urls.length > 1 && (
                                        <div className="grid grid-cols-2 gap-6">
                                            {profile.image_urls.slice(1).map((imgUrl, index) => (
                                                <div key={index} className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                                    <img
                                                        src={imgUrl}
                                                        alt={`${profile?.name} - Image ${index + 2}`}
                                                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
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
                        <div className="space-y-8 p-6 ">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">About {profile?.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {profile?.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">Company Details</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="font-medium text-gray-700 min-w-[100px]">Established:</span>
                                            <span className="text-gray-600">{new Date(profile?.established).toLocaleDateString()}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium text-gray-700 min-w-[100px]">Address:</span>
                                            <span className="text-gray-600">{profile?.address}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium text-gray-700 min-w-[100px]">Employees:</span>
                                            <span className="text-gray-600">{profile?.employees}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium text-gray-700 min-w-[100px]">Chairman:</span>
                                            <span className="text-gray-600">{profile?.chairman}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium text-gray-700 min-w-[100px]">President:</span>
                                            <span className="text-gray-600">{profile?.president}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">Group Companies</h4>
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-medium text-gray-700 mb-2">Domestic Group</h5>
                                            <ul className="space-y-2">
                                                {profile?.domestic_group?.map((group, index) => (
                                                    <li key={index} className="flex items-center text-gray-600">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                        {group.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-gray-700 mb-2">Overseas Group</h5>
                                            <ul className="space-y-2">
                                                {profile?.overseas_group?.map((group, index) => (
                                                    <li key={index} className="flex items-center text-gray-600">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                        {group.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default AboutTohoJp;
