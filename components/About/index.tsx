"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import OfficeLocation from "../Office/OfficeLocation";
import AboutTohoJp from "./AboutTohoJp";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390  px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "About Us",
              subtitle: "Innovative Solutions for Your Business Needs",
              description: `We offer a wide range of services that help businesses leverage technology to achieve greater efficiency, innovation, and growth. From custom development to strategic consultation, our services are designed to support your success.`,
            }}
          />
          <div className="flex items-center gap-8 lg:gap-32.5 mt-20">
            {/* Gambar */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden md:flex md:items-center md:justify-center aspect-[588/526.5] md:w-1/2"
            >
              <Image
                src="/images/logo-toho3.png"
                alt="Toho Technology Indonesia"
                width={300}
                height={300}
                className=""
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                PT. Toho Technology Indonesia
              </h2>
              <p className="text-justify mb-8 text-base wrapped text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sit itaque! Architecto, veniam dignissimos molestias voluptatibus autem debitis deleniti temporibus odio. Natus voluptates temporibus veniam voluptas saepe tempora aperiam exercitationem et explicabo, illo ducimus, sunt ipsam dolore cumque perferendis maiores inventore quia assumenda doloribus esse aspernatur voluptatum, nulla maxime. Eum, consequatur? Officia a iure minus illo ducimus eveniet dolor aspernatur cupiditate temporibus adipisci saepe modi, ipsam itaque fugit in. Eius consequatur culpa rerum veritatis voluptas! Adipisci, repellat nostrum? Velit, eaque!
              </p>
            </motion.div>
          </div>

        </div>
        <OfficeLocation />
        <AboutTohoJp />

      </section >
      {/* <!-- ===== About End ===== --> */}


    </>
  );
};

export default About;
