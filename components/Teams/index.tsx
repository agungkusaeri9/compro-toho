"use client";
import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { TeamData } from "./TeamData";
import SingleTeam from "./SingleTeam";
import { useQuery } from "@tanstack/react-query";
import { getTeams } from "@/services/ApiService";
import SkeletonTeam from "./SkeletonTeam";
import MainContent from "../Content/MainContent";

const Teams = () => {

  const { data: teams, isLoading } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const response = await getTeams();
      return response.data;
    }
  });

  return (
    <MainContent>
      <SectionHeader
        headerInfo={{
          title: "Teams",
          subtitle: "Meet Our Dedicated Team",
          description:
            "We are a passionate group of professionals committed to innovation and excellence. Our team brings together diverse skills and experiences to deliver impactful solutions.",
        }}
      />
      <motion.div
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        <div className="swiper testimonial-01 mb-20 pb-22.5">
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
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {isLoading
              ? [...Array(5)].map((_, i) => (
                <SwiperSlide key={`${i}`}>
                  <div className="swiper testimonial-01 pb-20 mb-15">
                    <SkeletonTeam key={i} />
                  </div>
                </SwiperSlide>
              ))
              : (
                teams?.map((data) => (
                  <SwiperSlide key={`data-${data.id}`}>
                    <div className="swiper testimonial-01 pb-20 mb-15">
                      <SingleTeam data={data} />
                    </div>
                  </SwiperSlide>
                ))
              )}


          </Swiper>
        </div>
      </motion.div>
    </MainContent>
  );
};

export default Teams;
