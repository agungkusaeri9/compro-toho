"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleService from "./SingleService";
import { getServices } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import SkeletonService from "./SkeletonService";

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await getServices();
      return response.data;
    }
  });
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


            {isLoading ? (
              [...Array(3)].map((_, key) => <SkeletonService key={key} />)
            ) : (
              services?.map((service, key) => (
                <SingleService data={service} key={key} />
              ))
            )}


            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
