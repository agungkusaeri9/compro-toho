"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import OfficeLocation from "../Office/OfficeLocation";
import AboutTohoIndo from "./AboutTohoIndo";
import AboutTohoJp from "./AboutTohoJp";
import MainContent from "../Content/MainContent";

const About = () => {
  return (
    <MainContent>
      <AboutTohoIndo />
      <AboutTohoJp />
    </MainContent>
  );
};

export default About;
