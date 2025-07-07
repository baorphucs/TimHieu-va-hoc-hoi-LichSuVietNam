/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft, FaRegCalendarAlt } from "react-icons/fa";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import HistoryDetail from "../components/History/HistoryDetail";
import AboutHCM from "../components/About/AboutHCM";

const History = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/history-events");
      if (!response.ok) throw new Error(`Không thể tải dữ liệu: ${response.status}`);
      const data = await response.json();
      console.log("Dữ liệu từ API:", data); // Debug
      setEvents(data);
    } catch (err) {
      console.error("Lỗi fetch:", err);
      setError(`Đã xảy ra lỗi: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (event) => {
    setSelectedMarker(event);
    setSelectedYear(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedYear(null);
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="py-5">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <Typography
          variant="h3"
          mb={2}
          align="center"
          sx={{
            position: "relative",
            color: "rgb(241, 76, 64)",
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
          }}
        >
          CON ĐƯỜNG ĐỘC LẬP
        </Typography>
        <Box>
          <AboutHCM />
        </Box>
      </motion.div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              style={{
                visibility: "visible",
                display: "block",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "rgb(241, 76, 64)",
                  }}
                >
                  {event.year}
                </Typography>

                <Card className="shadow-sm">
                  <Card.Body className="p-3">
                    {event.events.length === 2 ? (
                      <Row>
                        {event.events.map((subEvent, index) => (
                          <Col
                            md={12}
                            lg={6}
                            key={`${event.year}-${index}`}
                            className="mb-3"
                          >
                            <Card
                              sx={{
                                border: "1px solid #e0e0e0",
                                borderRadius: 3,
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                overflow: "hidden",
                                mb: 3,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={subEvent.images[0]}
                                alt={subEvent.title}
                                sx={{
                                  width: "100%",
                                  height: {
                                    xs: 400,
                                    sm: 300,
                                    md: 200,
                                    lg: 300,
                                  },
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                              <Box sx={{ p: 2, flexGrow: 1 }}>
                                <Typography
                                  variant="h5"
                                  sx={{ fontWeight: "bold", mb: 1 }}
                                >
                                  {subEvent.title}
                                </Typography>
                                <Typography
                                  variant="subtitle1"
                                  sx={{ mb: 2, color: "text.secondary" }}
                                >
                                  <FaRegCalendarAlt
                                    size={20}
                                    style={{
                                      marginRight: 8,
                                      color: "rgb(241, 76, 64)",
                                    }}
                                  />
                                  {subEvent.date}
                                </Typography>
                                <blockquote
                                  className="blockquote"
                                  style={{ margin: "0 0 16px 0" }}
                                >
                                  <FaQuoteLeft
                                    style={{
                                      color: "rgb(235, 116, 116)",
                                      marginRight: 8,
                                    }}
                                  />
                                  <Typography
                                    variant="body2"
                                    component="p"
                                    sx={{ display: "inline" }}
                                  >
                                    {subEvent.quote}
                                  </Typography>
                                </blockquote>
                                <Button
                                  variant="contained"
                                  onClick={() => handleMarkerClick(subEvent)}
                                  sx={{
                                    backgroundColor: "rgb(235, 116, 116)",
                                    "&:hover": {
                                      backgroundColor: "#e74c3c",
                                    },
                                  }}
                                >
                                  Xem chi tiết
                                </Button>
                              </Box>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Row>
                        <Col md={12} lg={event.events.length === 1 ? 12 : 6}>
                          <Box>
                            <div className="mb-2">
                              <CardMedia
                                component="img"
                                image={event.events[0].images[0]}
                                alt={event.events[0].title}
                                sx={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  borderRadius: 2,
                                }}
                              />
                            </div>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: "bold" }}
                            >
                              {event.events[0].title}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                my: 2,
                              }}
                            >
                              <FaRegCalendarAlt
                                size={30}
                                style={{
                                  marginRight: 8,
                                  color: "rgb(241, 76, 64)",
                                }}
                              />
                              {event.events[0].date}
                            </Typography>
                            <blockquote className="blockquote">
                              <FaQuoteLeft
                                style={{ color: "rgb(235, 116, 116)" }}
                              />
                              <p className="mb-0">{event.events[0].quote}</p>
                            </blockquote>
                            <Button
                              variant="contained"
                              onClick={() => handleMarkerClick(event.events[0])}
                              sx={{
                                backgroundColor: "rgb(235, 116, 116)",
                                "&:hover": {
                                  backgroundColor: "#e74c3c",
                                },
                              }}
                            >
                              Xem chi tiết
                            </Button>
                          </Box>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <HistoryDetail
        show={showModal}
        onHide={handleCloseModal}
        selectedEvent={selectedYear}
      />
    </Container>
  );
};

export default History;