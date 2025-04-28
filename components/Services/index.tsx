"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleService from "./SingleService";
import ServiceData from "@/data/Service";

const Services = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Services",
              subtitle: "Innovative Solutions for Your Business Needs",
              description: `We offer a wide range of services that help businesses leverage technology to achieve greater efficiency, innovation, and growth. From custom development to strategic consultation, our services are designed to support your success.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {ServiceData.map((feature, key) => (
              <SingleService feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
