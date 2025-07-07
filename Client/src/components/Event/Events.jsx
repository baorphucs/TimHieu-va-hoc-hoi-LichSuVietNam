/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventModal from "./EventModal";

const Events = ({
  events,
  title,
  themeColor = "rgb(235, 116, 116)",
  titleColor = "#e74c3c",
}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Kiểm tra nếu không có sự kiện
  if (!events || events.length === 0) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 2,
            color: titleColor,
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Không có sự kiện để hiển thị.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 2,
            color: titleColor,
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <Box sx={{ my: 4 }}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <motion.div
              key={event.id || index} // Sử dụng index nếu id không có
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                sx={{
                  mx: 1,
                  my: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={event.image || "https://via.placeholder.com/300"} // Fallback nếu không có image
                  alt={event.title || "Sự kiện"}
                  sx={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "24px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      minHeight: "96px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "justify",
                    }}
                  >
                    {event.title || "Chưa có tiêu đề"}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <CalendarTodayIcon
                      sx={{
                        mr: 1,
                        color: themeColor,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        flex: 1,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 1,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.date || "Chưa có ngày"}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        mr: 1,
                        color: themeColor,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        flex: 1,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.location || "Chưa có địa điểm"}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {event.description || "Chưa có mô tả"}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpenModal(event)}
                    sx={{
                      backgroundColor: themeColor,
                      "&:hover": {
                        backgroundColor: themeColor,
                        opacity: 0.9,
                      },
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Box>

      <EventModal
        open={!!selectedEvent}
        onClose={handleCloseModal}
        event={selectedEvent}
        themeColor={themeColor}
      />
    </Container>
  );
};

export default Events;