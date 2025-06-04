import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleService = ({ data }: { data: any }) => {
  const { image_url, title, description } = data;
  return (
    <>
      <div className="relative group ">
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
          <img src={image_url} alt="" className="w-full brightness-50 group-hover:brightness-100" />
          <div className="absolute bottom-1/3 p-5 w-full">
            <h3 className="mb-5 mt-7.5 font-semibold text-black dark:text-white  text-center text-white text-2xl">
              {title}
            </h3>
            <p className="text-slate-300 text-center">{description}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SingleService;
