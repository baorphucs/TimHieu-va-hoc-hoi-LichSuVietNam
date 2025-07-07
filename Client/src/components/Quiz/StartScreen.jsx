/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Box,
  Container,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { quizTheme } from "./theme";

const StartScreen = ({ onStartQuiz }) => {
  return (
    <ThemeProvider theme={quizTheme}>
      <Container
        className="py-5"
        sx={{ bgcolor: "background.default", minHeight: "100vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "80vh",
            }}
          >
            {/* Tiêu đề */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                align="center"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                  mb: 4,
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  letterSpacing: "0.05em",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                }}
              >
                THỬ TÀI LỊCH SỬ
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  maxWidth: 600,
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    textAlign: "justify",
                    mb: 3,
                    fontWeight: 500,
                    lineHeight: 1.8,
                  }}
                >
                  Chào mừng bạn đến với bài quiz Lịch sử Việt Nam! Hãy thử thách
                  kiến thức về sự kiện Giải phóng miền Nam 30/4/1975 và cuộc đời
                  Chủ tịch Hồ Chí Minh qua 10 câu hỏi thú vị.
                  <br /> Mỗi câu hỏi có 4 lựa chọn, thời gian trả lời là 30
                  giây. Trả lời đúng để nhận điểm số, trả lời sai không bị trừ
                  điểm.
                  <br />
                  Sau khi hoàn thành, bạn có thể xem giải thích đáp án và chia
                  sẻ kết quả với bạn bè. Đây là cơ hội để tìm hiểu thêm về lịch
                  sử dân tộc và những con người đã góp phần xây dựng đất nước.
                  <br />
                  <strong> Sẵn sàng thử sức?</strong> Nhấn{" "}
                  <strong>"Bắt đầu"</strong> để khởi động ngay!
                </Typography>

                {/* Nút bắt đầu */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onStartQuiz}
                    sx={{
                      px: 6,
                      py: 2,
                      fontSize: "1.2rem",
                      borderRadius: 8,
                    }}
                  >
                    Bắt đầu
                  </Button>
                </motion.div>
              </Paper>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
};

export default StartScreen;
