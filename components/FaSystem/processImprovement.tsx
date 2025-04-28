"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const ProcessImprovement = () => {
    return (
        <>
            {/* <!-- ===== About Start ===== --> */}
            <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1390  px-4 md:px-8 xl:px-0">
                    <SectionHeader
                        headerInfo={{
                            title: "Process Improvement",
                            subtitle: "Innovative Solutions for Your Business Needs",
                            description: `We offer a wide range of services that help businesses leverage technology to achieve greater efficiency, innovation, and growth. From custom development to strategic consultation, our services are designed to support your success.`,
                        }}
                    />
                </div>

            </section >
            {/* <!-- ===== About End ===== --> */}


        </>
    );
};

export default ProcessImprovement;
