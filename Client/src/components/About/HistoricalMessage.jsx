/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Paper } from "@mui/material";

const HistoricalMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const cardTitleVariants = {
    initial: { color: "#343a40" },
    hover: {
      color: "rgb(67, 150, 233)",
      transition: { duration: 0.3 },
    },
  };

  const cardTextVariants = {
    initial: { color: "#6c757d" },
    hover: {
      color: "#212529",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="mb-5" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-center mb-5"
          initial="initial"
          animate="animate"
          style={{
            position: "relative",
            backgroundSize: "200% 200%",
            color: "rgb(237, 62, 50)",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          Ý NGHĨA LỊCH SỬ
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
        </motion.h2>
        <Row className="g-4">
          <Col lg={6} md={12} sm={12}>
            <motion.div
              initial={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#f8f9fa",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <Paper
                elevation={3}
                className="p-4"
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: "#fff",
                  minHeight: { xs: "200px", sm: "300px", md: "350px" },
                }}
              >
                <motion.div variants={cardTitleVariants}>
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 –
                    19/5/2025)
                  </Card.Title>
                </motion.div>
                <motion.div variants={cardTextVariants}>
                  <Card.Text
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    Chủ tịch Hồ Chí Minh là biểu tượng vĩ đại của lòng yêu nước,
                    ý chí kiên cường và khát vọng độc lập tự do của dân tộc Việt
                    Nam. Người đã khai sáng con đường cách mạng giải phóng dân
                    tộc, sáng lập Đảng Cộng sản Việt Nam và lãnh đạo nhân dân
                    giành thắng lợi vẻ vang qua các cuộc kháng chiến chống thực
                    dân, đế quốc, đưa nước ta từ thân phận nô lệ trở thành quốc
                    gia độc lập. Không chỉ là lãnh tụ của dân tộc, Bác Hồ còn là
                    danh nhân văn hóa kiệt xuất, để lại di sản tư tưởng, đạo
                    đức, phong cách mẫu mực, mãi mãi là tấm gương sáng cho các
                    thế hệ Việt Nam noi theo trên con đường xây dựng và bảo vệ
                    Tổ quốc.
                  </Card.Text>
                </motion.div>
              </Paper>
            </motion.div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <motion.div
              initial={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#f8f9fa",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <Paper
                elevation={3}
                className="p-4"
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: "#fff",
                  minHeight: { xs: "200px", sm: "300px", md: "350px" },
                }}
              >
                <motion.div variants={cardTitleVariants}>
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    50 NĂM GIẢI PHÓNG MIỀN NAM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 –
                    30/4/2025)
                  </Card.Title>
                </motion.div>
                <motion.div variants={cardTextVariants}>
                  <Card.Text
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    Ngày 30 tháng 4 năm 1975 đã đi vào lịch sử dân tộc như một
                    mốc son chói lọi, đánh dấu chiến thắng hoàn toàn của cuộc
                    kháng chiến chống Mỹ cứu nước, giải phóng miền Nam và thống
                    nhất đất nước. Đây là ngày non sông thu về một mối, đất nước
                    trở lại nguyên vẹn, nhân dân được hưởng tự do, hòa bình,
                    chấm dứt hơn 100 năm nô lệ dưới ách thực dân, đế quốc. Mốc
                    son lịch sử này không chỉ đánh dấu sự hy sinh và đóng góp to
                    lớn của các thế hệ đi trước, mà còn khẳng định sức mạnh đoàn
                    kết, ý chí kiên cường của dân tộc Việt Nam trong hành trình
                    giành lại độc lập và tự do.
                  </Card.Text>
                </motion.div>
              </Paper>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default HistoricalMessage;
