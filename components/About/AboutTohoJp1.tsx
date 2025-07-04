import React from 'react'
import { motion } from "framer-motion";
import SectionHeader from '../Common/SectionHeader';

const AboutTohoJp = () => {

    return (
        <>
            <div className="py-16 px-4 md:px-10 bg-white">
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
                                title: "About TOHO TECHNOLOGY CO, LTD",
                                subtitle: "Innovative Solutions for Your Business Needs",
                                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum vero natus? Rem sint, autem commodi quis cumque explicabo maiores ipsa, maxime suscipit facere officia nostrum asperiores minima eveniet quod modi, incidunt doloribus fugiat. Perferendis doloremque voluptate eveniet mollitia ab.`,
                            }}
                        />
                    </motion.div>
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
                            className="animate_left  relative mx-auto items-center hidden aspect-[588/526.5] md:block "
                        >
                            <div className="group rounded-2xl overflow-hidden max-w-5xl mx-auto space-y-4">
                                {/* Gambar atas (besar, 1 kolom) */}
                                <div className="w-full h-[300px] overflow-hidden">
                                    <img
                                        src="/images/toho-japan.avif"
                                        alt="Main Office"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Gambar bawah (2 kolom sejajar, masing-masing 1/2 lebar) */}
                                <div className="grid grid-cols-2 h-[250px]">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/toho-japan2.avif"
                                            alt="Side View 1"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/toho-japan3.avif"
                                            alt="Side View 2"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
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
                            className="animate_right  relative mx-auto items-center hidden aspect-[588/526.5] md:block "
                        >
                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed text-justify">
                                TOHO Technology Co., Ltd is committed to delivering high-quality industrial and engineering solutions. With a strong foundation in innovation and a global mindset, we provide cutting-edge technology and outstanding service to our clients worldwide.
                            </p>

                            {/* Information Table */}
                            <table className="w-full text-sm text-gray-800 mt-5">
                                <tbody>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Name
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Estabilished
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Address
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Capital
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Employees
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Representative
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Domestic Group
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left font-semibold py-3 px-4 bg-gray-200  w-1/3 text-gray-700">
                                            Overseas Group
                                        </th>
                                        <td className="py-3 px-4 text-gray-900 rounded-r-lg bg-white">
                                            TOHO TECHNOLOGY CO., LTD
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutTohoJp
