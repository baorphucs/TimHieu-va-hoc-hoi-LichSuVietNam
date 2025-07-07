import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("vi-VN", options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography
  variant="h6"
  sx={{
    color: "rgb(242, 4, 4)",
    fontSize: { xs: "0.9rem", md: "1.1rem" }, // nhỏ trên mobile, lớn hơn ở màn hình rộng
    fontWeight: 500,
  }}
  >
    {formatDate(date)}, {formatTime(date)}
  </Typography>
    </Box>
  );
};

export default Clock;
