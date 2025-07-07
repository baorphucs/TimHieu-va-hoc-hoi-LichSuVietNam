/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Data
const featuredEvents = [
  {
    title: "Lễ Kỷ Niệm Trọng Thể",
    date: "30/04/2025",
    image: "/images/LeKiNiemTrongThe.jpg",
    description:
      "Trong dịp kỷ niệm 50 năm Ngày Thống nhất đất nước, nhiều cựu chiến binh và người dân khắp các tỉnh thành đã đổ về Quảng trường Ba Đình để dự lễ thượng cờ, họp mặt và chụp ảnh kỷ niệm.",
    link: "https://dantri.com.vn/xa-hoi/hang-nghin-nguoi-do-ve-quang-truong-ba-dinh-du-le-thuong-co-dip-304-20250428103936601.htm",
  },
  {
    title: "Triển Lãm Ảnh Lịch Sử",
    date: "01/05/2025 - 15/05/2025",
    image: "/images/TrienLamAnhLichSu.jpg",
    description:
      "Triển lãm ảnh về hành trình thống nhất đất nước qua các thời kỳ.",
    link: "https://danangfantasticity.com/le-hoi-su-kien/trien-lam-my-thuat-vong",
  },
  {
    title: "Hội Thảo Khoa Học",
    date: "10/05/2025",
    image: "/images/HoiThaoHome.png",
    description:
      "Hội thảo về ý nghĩa lịch sử và giá trị của sự thống nhất đất nước.",
    link: "https://www.qdnd.vn/xa-hoi/tin-tuc/hoi-thao-khoa-hoc-quoc-gia-dai-thang-mua-xuan-nam-1975-gia-tri-lich-su-va-bai-hoc-kinh-nghiem-trong-xay-dung-va-bao-ve-to-quoc-hien-nay-825802",
  },
];

// Component FeaturedEvents
const FeaturedEvents = () => {
  return (
    <Container>
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
          SỰ KIỆN NỔI BẬT
        </Typography>
      </motion.div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {featuredEvents.map((event, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 33.333%",
              maxWidth: "33.333%",
              padding: "15px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
                sx={{
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={event.image}
                  alt={event.title}
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <Link to={event.link}>
                  <CardContent style={{ flexGrow: 1, padding: "1.5rem" }}>
                    <Typography
                      variant="h6"
                      component="h5"
                      style={{
                        fontWeight: 700,
                        color: "#333",
                        marginBottom: "0.5rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 1,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#666",
                        marginBottom: "0.5rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 1,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.date}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#333",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedEvents;
