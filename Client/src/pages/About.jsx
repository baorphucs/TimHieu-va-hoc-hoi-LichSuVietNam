/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import HistoricalMessage from "../components/About/HistoricalMessage";
import Celebrate from "../components/About/Celebrate";
import LeaderMessage from "../components/About/LeaderMessage";
import AboutHCM from "../components/About/AboutHCM";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="text-center mb-4">
            <h2
              className="text-center mb-5"
              initial="initial"
              animate="animate"
              style={{
                position: "relative",
                backgroundSize: "200% 200%",
                color: "rgb(237, 62, 50)",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              CON NGƯỜI VĨ ĐẠI
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "4px",
                  backgroundColor: "#007bff",
                  borderRadius: "2px",
                }}
              />
            </h2>
            <AboutHCM />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="text-center mb-4">
            {" "}
            <LeaderMessage />
          </Col>
        </Row>
      </motion.div>
      <HistoricalMessage />

      <Celebrate />
    </Container>
  );
};

export default About;
