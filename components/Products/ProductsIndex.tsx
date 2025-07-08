"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useState } from "react";
import Cto from "../Section/Cto";

// TOHO Products data based on Japanese and Indonesian websites
const tohoProducts = [
    {
        id: 1,
        title: "PLINE II",
        description: "PLINE is a device that transmits Ethernet or RS485 communication by superimposing it on AC100V/AC200V power lines.",
        category: "Communication",
        image: "/images/products/pline.png",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Tentang PLINE II</h3>
                <p className="mb-4">PLINE II adalah perangkat komunikasi industri yang memungkinkan transmisi data melalui kabel 2-wire Ethernet/RS485. Dirancang untuk keandalan tinggi di lingkungan industri, PLINE II mendukung instalasi mudah, konfigurasi fleksibel, dan komunikasi jarak jauh. Cocok untuk aplikasi otomasi pabrik, monitoring, dan integrasi sistem industri modern.</p>
                <h4 className="text-lg font-semibold mb-1">Fitur Utama</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Komunikasi 2-wire Ethernet/RS485</li>
                    <li>Keandalan industri</li>
                    <li>Instalasi dan konfigurasi mudah</li>
                    <li>Kemampuan komunikasi jarak jauh</li>
                </ul>
                <h4 className="text-lg font-semibold mb-1">Aplikasi</h4>
                <p className="mb-4">Digunakan pada otomasi pabrik, sistem monitoring, integrasi mesin, dan berbagai aplikasi industri lainnya yang membutuhkan komunikasi data yang stabil dan efisien.</p>
                <h4 className="text-lg font-semibold mb-1">Spesifikasi Teknis</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Protokol: Ethernet/RS485</li>
                    <li>Jarak transmisi: Hingga 1200 meter</li>
                    <li>Temperatur operasi: -20°C hingga 60°C</li>
                    <li>Dimensi: 120 x 80 x 35 mm</li>
                </ul>
                <h4 className="text-lg font-semibold mb-1">Keunggulan</h4>
                <p className="mb-4">PLINE II menawarkan solusi hemat biaya untuk komunikasi industri tanpa mengorbankan keandalan dan performa. Dengan desain kompak dan fitur canggih, perangkat ini menjadi pilihan utama untuk modernisasi sistem industri Anda.</p>
                <h4 className="text-lg font-semibold mb-1">Testimoni Pengguna</h4>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">"Sejak menggunakan PLINE II, sistem monitoring pabrik kami menjadi lebih stabil dan mudah diintegrasikan dengan perangkat lain."</blockquote>
                <p className="mb-2">Untuk informasi lebih lanjut, silakan hubungi tim sales kami atau unduh brosur produk di website resmi TOHO.</p>
            </div>
        ),
        features: [
            "2-wire Ethernet/RS485 communication",
            "Industrial grade reliability",
            "Easy installation and configuration",
            "Long-distance communication capability"
        ],
        specs: "Industrial Communication Device"
    },
    {
        id: 2,
        title: "TOLINE",
        description: "TOLINE multiplex transmission device is a simple communication that transmits many signals over a pair of wires, and supports various systems in the automotive and material handling industries.",
        category: "Communication",
        image: "/images/products/toline.jpg",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Tentang TOLINE</h3>
                <p className="mb-4">TOLINE adalah perangkat multi-transmisi untuk komunikasi data industri yang mendukung berbagai protokol dan aplikasi. Dengan kemampuan transmisi yang andal dan kompatibilitas tinggi, TOLINE sangat ideal untuk integrasi sistem, pengumpulan data, dan pengiriman sinyal di lingkungan industri yang kompleks.</p>
                <h4 className="text-lg font-semibold mb-1">Fitur Utama</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Kemampuan multi-transmisi</li>
                    <li>Komunikasi data industri</li>
                    <li>Transmisi sinyal yang andal</li>
                    <li>Kompatibel dengan berbagai protokol</li>
                </ul>
                <h4 className="text-lg font-semibold mb-1">Aplikasi</h4>
                <p className="mb-4">Ideal untuk integrasi sistem, pengumpulan data mesin, dan pengiriman sinyal di lingkungan industri yang membutuhkan fleksibilitas dan keandalan tinggi.</p>
                <h4 className="text-lg font-semibold mb-1">Spesifikasi Teknis</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Protokol: Multi-protocol support</li>
                    <li>Jarak transmisi: Hingga 1500 meter</li>
                    <li>Temperatur operasi: -10°C hingga 70°C</li>
                    <li>Dimensi: 130 x 85 x 40 mm</li>
                </ul>
                <h4 className="text-lg font-semibold mb-1">Keunggulan</h4>
                <p className="mb-4">TOLINE memberikan solusi komunikasi data yang fleksibel dan dapat diandalkan untuk berbagai kebutuhan industri, mendukung efisiensi dan produktivitas operasional.</p>
                <h4 className="text-lg font-semibold mb-1">Testimoni Pengguna</h4>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">"TOLINE memudahkan integrasi antar mesin di pabrik kami dan sangat stabil dalam pengiriman data."</blockquote>
                <p className="mb-2">Hubungi tim sales kami untuk konsultasi solusi terbaik atau unduh dokumen teknis di website TOHO.</p>
            </div>
        ),
        features: [
            "Multi-transmission capability",
            "Industrial data communication",
            "Reliable signal transmission",
            "Compatible with various protocols"
        ],
        specs: "Multi-Transmission Device"
    }
];


const ProductsIndex = () => {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='mb-20'>
            {/* Products Section */}
            <div className="py-20">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Our Products",
                            subtitle: "Industrial Solutions for Modern Applications",
                            description: "Explore our range of TOHO products designed for industrial communication, measurement, and automation applications.",
                        }}
                    />

                    {/* Category Filter */}
                    {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-white px-6 py-3 text-gray-700 shadow-lg transition-all hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div> */}

                    {/* Products Grid */}
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {tohoProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
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
                                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800 cursor-pointer"
                                onClick={() => {
                                    setSelectedProduct(product);
                                    setShowModal(true);
                                }}
                            >
                                <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={150}
                                        height={150}
                                        // fill
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                                    {product.category}
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                                    {product.title}
                                </h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>
                                <div className="mb-4">
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                        {product.specs}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {product.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {showModal && selectedProduct && (
                    <motion.div
                        className="fixed inset-0 z-999999 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm bg-black/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />
                        {/* Modal */}
                        <motion.div
                            className="relative bg-white dark:bg-gray-800 rounded-2xl p-10 w-[90vw] h-[90vh] max-w-6xl max-h-[90vh] shadow-2xl z-10 mx-2 flex flex-col"
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 40 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-3xl"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{selectedProduct.title}</h2>
                            <div className="overflow-y-auto flex-1 pr-2">
                                {selectedProduct.content}
                            </div>
                            <div className="flex justify-end pt-6">
                                <button
                                    className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 text-lg font-semibold"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <Cto
                title="Interested in Our Products?"
                description="Contact us to learn more about our industrial products and how they can benefit your operations.
            Our team is ready to provide technical support and customized solutions."
            />
        </div>
    );
};

export default ProductsIndex; 