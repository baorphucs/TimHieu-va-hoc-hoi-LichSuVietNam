/* eslint-disable no-unused-vars */
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

const Celebrate = () => {
  const timelineSteps = [
    {
      year: "2020",
      event: "Kỷ niệm 130 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2015",
      event: "Kỷ niệm 125 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2010",
      event: "Kỷ niệm 120 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2005",
      event: "Kỷ niệm 115 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
  ];

  const galleryImages = [
    "./images/HATB1.jpg",
    "./images/HATB3.jpg",
    "./images/HATB4.jpg",
    "./images/HATB2.jpg",
    "./images/HATB5.jpg",
    "./images/HATB6.jpg",
  ];

  return (
    <Container>
      <Row>
        {/* Timeline Section */}
        <Col md={5} className="mb-8">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            style={{
              color: "rgb(237, 62, 50)",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            CÁC LẦN KỶ NIỆM TRƯỚC
          </motion.h2>
          <Box sx={{ width: "100%" }}>
            <Stepper orientation="vertical">
              {timelineSteps.map((step, index) => (
                <Step key={index} active={true}>
                  <StepLabel>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.2,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.3 + 0.1, // Trễ hơn số năm một chút
                            ease: "easeOut",
                          },
                        }}
                      >
                        <Typography variant="h6">{step.year}</Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.3 + 0.2, // Trễ hơn số năm và sự kiện trước
                            ease: "easeOut",
                          },
                        }}
                      >
                        <Typography>{step.event}</Typography>
                      </motion.div>
                    </motion.div>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Col>

        {/* Gallery Section */}
        <Col md={7} className="mb-8">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            style={{
              color: "rgb(237, 62, 50)",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            HÌNH ẢNH TIÊU BIỂU
          </motion.h2>
          <Row className="g-4">
            {galleryImages.map((image, index) => (
              <Col key={index} xs={12} sm={6} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={image}
                      className="img-fluid"
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Celebrate;
