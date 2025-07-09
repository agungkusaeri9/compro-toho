import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
const OfficeLocationSingle = ({ data }: { data: any }) => {
    const { image_url, name, address, map_address } = data;
    return (
        <>
            <div>
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
                    className="animate_left  relative mx-auto items-center hidden md:block "
                >
                    <div className="group rounded-xl overflow-hidden align-center items-center text-left p-6 w-full ">
                        <div className="flex justify-beetwen mb-5 gap-4">
                            <div className='h-30 w-full h-[200px]  overflow-hidden relative'>
                                <Image
                                    src={image_url}
                                    alt={`${name}`}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{name}</h3>
                                <p className="text-slate-500  leading-relaxed h-23">
                                    {address}
                                </p>
                                <div className='mt-7'>
                                    <Link href={map_address} target='_blank' className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-colors duration-200 font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        Visit Location
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default OfficeLocationSingle
