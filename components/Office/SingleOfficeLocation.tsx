import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import SectionHeader from '../Common/SectionHeader';

const OfficeLocationSingle = ({ data }: { data: any }) => {
    const { image_url, name, address } = data;
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
                    <div className="group rounded-2xl overflow-hidden align-center items-center text-center p-6 w-full">
                        <div className="flex justify-center mb-5">
                            <Image
                                src={image_url}
                                alt={`${name}`}
                                height={180}
                                width={180}
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{name}</h3>
                        <p className="text-slate-500  leading-relaxed">
                            {address}
                        </p>
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default OfficeLocationSingle
