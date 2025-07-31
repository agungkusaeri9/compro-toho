"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { AboutSkeleton } from '../Skeleton/AboutSkeleton';
import { getProfileTohoJapan } from '@/services/ApiService';
import TohoJapanConfig from '@/data/TohoJapanConfig';


const AboutTohoJp = () => {
    const { data: profile, isLoading } = useQuery({
        queryKey: ["profileJapan"],
        queryFn: async () => {
            const response = await getProfileTohoJapan();
            return response.data;
        }
    });
    const { section_title, section_subtitle, section_description, name, description } = TohoJapanConfig;

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
                            title: section_title,
                            subtitle: section_subtitle,
                            description: section_description,
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
                        <div className="grid grid-cols-1 gap-6 p-4 rounded-xl shadow-sm">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">About {name}</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {description}
                                </p>
                            </div>
                            <table className="min-w-[300px] mt-4 rounded overflow-hidden border-collapse">
                                <tbody>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Founded</th>
                                        <td className="px-3 py-2 border border-gray-400">1829</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Established</th>
                                        <td className="px-3 py-2 border border-gray-400">Oct 1932</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Address</th>
                                        <td className="px-3 py-2 border border-gray-400">Nagoya, Aichi - Japan</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Capital</th>
                                        <td className="px-3 py-2 border border-gray-400">JPY 430M</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Employee</th>
                                        <td className="px-3 py-2 border border-gray-400">700 (total group)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Representative</th>
                                        <td className="px-3 py-2 border border-gray-400">President (Mr.) Hideyuki Tomita</td>
                                    </tr>
                                    <tr>
                                        <th rowSpan={5} className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Domestic Group</th>
                                        <td className="px-3 py-2 border border-gray-400">Inazawa Manufacturing R&D</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border border-gray-400">Kyoto Office</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border border-gray-400">Tokyo Branch</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border border-gray-400">Osaka Branch</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border border-gray-400">Kyusyu R&D Centre, others</td>
                                    </tr>
                                    <tr>
                                        <th rowSpan={2} className="text-left w-40 bg-black text-white text-sm px-3 py-2 font-light border border-gray-400">Everseas Group</th>
                                        <td className="px-3 py-2 border border-gray-400">TOHO TECHNOLOGY (Shanghai) CO, LTD</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border border-gray-400">TOHO TECHNOLOGY INC. (USA)</td>
                                    </tr>
                                </tbody>
                            </table>

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
                </div>
            )}
        </>
    );
};

export default AboutTohoJp;
