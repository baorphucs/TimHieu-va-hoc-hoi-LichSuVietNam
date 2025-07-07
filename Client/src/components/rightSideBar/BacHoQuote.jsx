/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const BacHoQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/quotes");
      if (!response.ok) throw new Error(`Không thể tải dữ liệu: ${response.status}`);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentQuote(data[randomIndex]);
    } catch (err) {
      console.error("Lỗi fetch:", err);
      setError(`Đã xảy ra lỗi: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getRandomQuote = () => {
    fetchQuotes(); // Gọi lại API để lấy quote ngẫu nhiên mới
  };

  if (loading) {
    return (
      <Paper
        elevation={3}
        sx={{
          color: "black",
          m: 2,
          p: 3,
          background: "linear-gradient(135deg, rgb(227, 149, 149), rgb(248, 220, 78))",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Đang tải lời dạy...
        </Typography>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper
        elevation={3}
        sx={{
          color: "black",
          m: 2,
          p: 3,
          background: "linear-gradient(135deg, rgb(227, 149, 149), rgb(248, 220, 78))",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        color: "black",
        m: 2,
        p: 3,
        background: "linear-gradient(135deg, rgb(227, 149, 149), rgb(248, 220, 78))",
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
          }}
        >
          <FaQuoteLeft sx={{ fontSize: 28 }} />
          Lời dạy của Bác
        </Typography>

        <AnimatePresence mode="wait">
          {currentQuote && (
            <motion.div
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  fontStyle: "italic",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                "{currentQuote.text}"
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "block",
                  opacity: 0.8,
                  fontStyle: "italic",
                }}
              >
                {currentQuote.context}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>

        <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={getRandomQuote}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
            aria-label="next quote"
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default BacHoQuote;