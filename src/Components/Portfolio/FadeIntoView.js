import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Introduction from './Introduction';
import LandingPage from './LandingPage';
import './Portfolio.css';
import Projects from './Projects';
import SideBar from './SideBar';
import TabExperience from './TabExperience';
import TopBar from './TopBar';
import TopButton from './TopButton';

export default function FadeIntoView({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
    >
      {children}
    </motion.div>
  );
}

