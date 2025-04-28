import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import SectionHeader from '../Common/SectionHeader';

const OfficeLocation = () => {
    return (
        <>
            <div className="py-16 px-4 md:px-10 bg-gray-50">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                    <div className="animate_top mx-auto text-center">
                        <SectionHeader
                            headerInfo={{
                                title: `Office Location`,
                                subtitle: `Latest News & Blogs`,
                                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
                            }}
                        />
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
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
                                <div className="flex justify-center">
                                    <Image
                                        src="/images/map.svg"
                                        alt="Head Office"
                                        height={180}
                                        width={180}
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Jakarta Office</h3>
                                <p className="text-slate-500  leading-relaxed">
                                    Jl. Cipinang Cempedak II No.45 13, RT.13/RW.3, Cipinang Cempedak, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13340
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Office 1 */}


                    {/* Office 2 */}
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
                                <div className="flex justify-center">
                                    <Image
                                        src="/images/map.svg"
                                        alt="Head Office"
                                        height={180}
                                        width={180}
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cikarang Office</h3>
                                <p className="text-slate-500  leading-relaxed">
                                    fresno, Jl. Ganesha Boulevard No.15 blok c, Hegarmukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficeLocation
