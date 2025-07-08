import { motion, AnimatePresence } from "framer-motion";
const Cto = ({ title, description }: any) => {
    return (
        <>
            <div className="bg-gray-50 py-20 dark:bg-gray-900">
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
                            {title}
                        </h2>
                        <p className="mb-8 text-lg opacity-90">
                            {description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-white px-8 py-3 text-blue-600 transition-all hover:bg-gray-100"
                            >
                                Request Quote
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
        </>
    )
}

export default Cto;