import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import VissionMissionData from "@/data/VissionMissionData";
const VissionMission = () => {
    const { vission, mission, title, subtitle, description } = VissionMissionData;
    return (
        <>
            <div className="py-16 px-4 md:px-10">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-5">
                    <div className="animate_top mx-auto text-center">
                        <SectionHeader
                            headerInfo={{
                                title: title,
                                subtitle: subtitle,
                                description: description,
                            }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-10">
                    <div className="mt-10">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_top text-center"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {vission}
                            </p>
                        </motion.div>
                    </div>
                    <div className="mt-10">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_top text-center"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <ul className="text-gray-700 leading-relaxed space-y-2 text-left max-w-xl mx-auto">
                                {mission.map((item: string, index: number) => (
                                    <li key={index} className="list-disc pl-5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VissionMission;