"use client";

import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { TeamData } from "../Teams/TeamData";
import SingleTeam from "../Teams/SingleTeam";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "@/services/ApiService";
import SingleBanner from "./singleBanner";
import SkeletonBanner from "./SkeletonBanner";

const Banner = () => {

  const { data: banners, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const response = await getBanner();
      return response.data;
    },
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <section className="w-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto  px-4 md:px-8 xl:mt-23 xl:px-0 w-full"
        >
          {/* Swiper Start */}
          <div className=" w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="w-full"
            >


              {isLoading ? (
                [...Array(1)].map((_, i) => (
                  <SwiperSlide key={`skeleton-${i}`} className="w-full">
                    <div className="w-full h-[100vh]">
                      <SkeletonBanner />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                banners?.map((data) => (
                  <SwiperSlide key={`banner-${data.id}`} className="w-full">
                    <div className="w-full h-[100vh]">
                      <SingleBanner data={data} />
                    </div>
                  </SwiperSlide>
                ))
              )}


            </Swiper>
          </div>
          {/* Swiper End */}
        </motion.div>
      </section>
    </>
  );
};

export default Banner;
