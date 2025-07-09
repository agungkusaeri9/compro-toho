import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Client } from "@/types/client";

const SingleClient = ({ data }: { data: Client }) => {
  const { name, description, image } = data;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        // href={href}
        className="animate_top mx-w-full relative block h-25 w-[98px] "
      >
        <Image
          className="opacity-65 object-contain  transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          // fill
          height={100}
          width={100}
        />
        <Image
          className="hidden object-cover opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={image}
          alt={name}
          // fill
          height={100}
          width={100}
        />
      </motion.a>
    </>
  );
};

export default SingleClient;
