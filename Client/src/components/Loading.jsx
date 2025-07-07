import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Loading = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 20 }}
      onAnimationComplete={onComplete}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#FCFAF2", // Nền xanh đậm
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        flexDirection: "row", // Sắp xếp ngang
        gap: "40px", // Khoảng cách giữa văn bản và hình ảnh
        padding: "20px",
      }}
    >
      {/* Phần văn bản */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column", // Các dòng chữ xếp dọc trong khối văn bản
          gap: "20px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "#ffeb3b", // Màu vàng
              fontSize: "2.5rem",
              fontWeight: "700",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            CHÀO MỪNG BẠN ĐẾN VỚI TRANG WEB CỦA TÔI 
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            align="center"
            style={{
              color: "rgba(247, 8, 8, 0.99)",
              fontSize: "2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.99)",
            }}
          >
            QUẦN ĐẢO HOÀNG SA - TRƯỜNG SA LÀ CỦA VIỆT NAM<br />
            (THE HOANG SA - TRUONG SA ARCHIPELAGO BELONGS TO VIETNAM)
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{
              color: "#bbdefb", // Màu xanh nhạt
              fontStyle: "italic",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Đang tải hành trình lịch sử...
          </Typography>
        </motion.div>
      </motion.div>

      {/* Phần hình ảnh */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1, yoyo: Infinity }}
        style={{
          flexShrink: 0, // Ngăn hình ảnh co lại
        }}
      >
        <motion.img
         src="images/ban-do-VN-1.jpg" // Thay bằng đường dẫn hình ảnh thực tế
          alt="Loading Image"
          style={{
            width: "550px", // Điều chỉnh kích thước hình ảnh
            height: "550px",
            objectFit: "contain", // Giữ tỷ lệ hình ảnh
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loading;