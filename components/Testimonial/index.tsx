"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { useQuery } from "@tanstack/react-query";
import { getTestimonial } from "@/services/ApiService";
import MainContent from "../Content/MainContent";

const Testimonial = () => {

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const response = await getTestimonial();
      return response.data;
    },
    refetchOnWindowFocus: false,
  })
  return (
    <MainContent>
      <SectionHeader
        headerInfo={{
          title: `TESTIMONIALS`,
          subtitle: `Client’s Testimonials`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
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
        {/* <!-- Slider main container --> */}
        <div className="swiper testimonial-01 mb-20">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials?.map((testimonial) => (
              <SwiperSlide key={testimonial?.id}>
                <SingleTestimonial data={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </MainContent>
  );
};

export default Testimonial;
