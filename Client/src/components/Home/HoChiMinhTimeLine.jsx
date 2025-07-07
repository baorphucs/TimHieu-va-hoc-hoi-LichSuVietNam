/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography, Box, Container, CircularProgress } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const HoChiMinhTimeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  fetch("http://localhost:5000/api/timelines/")
    .then((res) => {
      if (!res.ok) throw new Error(`Không thể tải dữ liệu: ${res.status}`);
      return res.json();
    })
    .then((data) => setTimeline(data))
    .catch((err) => {
      console.error("Lỗi fetch:", err);
      setError(`Đã xảy ra lỗi: ${err.message}`);
    })
    .finally(() => setLoading(false));
}, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Đang tải dữ liệu...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="container py-4 py-md-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typography
          align="center"
          sx={{
            mb: 6,
            fontSize: {
              color: "rgb(241, 76, 64)",
              xs: "1rem",
              sm: "1.5rem",
              md: "1.7rem",
              lg: "2.25rem",
            },
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
          }}
        >
          CON ĐƯỜNG GIẢI PHÓNG DÂN TỘC CỦA CHỦ TỊCH HỒ CHÍ MINH
        </Typography>
      </motion.div>
      <div className="position-relative">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="d-flex mb-4 mb-md-5 flex-column flex-md-row"
          >
            <div
              className="text-center"
              style={{
                minWidth: "80px",
                marginBottom: "0.5rem",
              }}
            >
              <Typography
                variant="h6"
                className="text-primary fw-bold"
                sx={{
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#ff0000",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {item.year}
              </Typography>
            </div>
            <div className="flex-grow-1" style={{ marginLeft: "40px" }}>
              <motion.div
                style={{
                  borderLeft: "10px solid rgb(53, 50, 51)",
                  padding: "1rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "0.25rem",
                  boxShadow:
                    "-6px -2px 4px rgba(0, 0, 0, 0.2), " +
                    "0px 4px 8px rgba(0, 0, 0, 0.15), " +
                    "0px 8px 16px rgba(0, 0, 0, 0.1), " +
                    "0px 16px 32px rgba(0, 0, 0, 0.05)",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0px 2px 6px rgba(0, 0, 0, 0.25), " +
                    "0px 6px 12px rgba(0, 0, 0, 0.2), " +
                    "0px 12px 24px rgba(0, 0, 0, 0.15), " +
                    "0px 24px 48px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.event}
                    className="rounded"
                    sx={{
                      width: "12rem",
                      height: "12rem",
                      objectFit: "cover",
                      "@media (max-width:765px)": {
                        width: "100%",
                      },
                    }}
                  />
                  <div className="flex-grow-1">
                    <Typography
                      variant="h5"
                      className="mb-2"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.event}
                    </Typography>
                    <Typography
                      variant="inherit"
                      className="text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 4,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.details}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default HoChiMinhTimeline;
