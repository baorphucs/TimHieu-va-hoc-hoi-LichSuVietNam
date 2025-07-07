// src/components/Header.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Clock from "./Clock";
import HeaderEffect from "./HeaderEffect"; // Import component mới

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(252, 250, 242, 255)",
        px: { xs: 2, sm: 2, md: 2 },
        py: { xs: 1, md: 3 },
        boxShadow: "0 4px 12px rgba(7, 138, 232, 0.66)",
        display: "flex",
        alignItems: { xs: "center", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 3 },
        position: "relative",
        minHeight: "180px", // Tăng chiều cao để chứa cả Clock và HeaderEffect
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "center" },
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            component="img"
            src=".\images\NTTU.png"
            alt="Logo"
            sx={{
              marginTop: { xs: 0, sm: 2, md: 2 },
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              objectFit: "contain",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </motion.div>
        {/* Text Content */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#555",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: { xs: "0.7rem", sm: "1rem", md: "1rem" },
              mb: 1,
            }}
          >
            Trường Đại học Nguyễn Tất Thành - Sinh viên Khoa Công nghệ Thông tin xin chào mừng
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#C41E3A",
              textShadow: "1px 1px 0 #FFD700, 0 2px 6px rgba(0,0,0,0.1)",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" },
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            LỄ KỶ NIỆM 50 NĂM NGÀY 30/4 (30/4/1975 – 30/4/2025)
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#C41E3A",
              textShadow: "1px 1px 0 #FFD700, 0 2px 6px rgba(0,0,0,0.1)",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" },
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            CHÀO MỪNG 50 NĂM GIẢI PHÓNG MIỀN NAM - THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              fontStyle: "italic",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Tôn vinh những dấu mốc lịch sử hào hùng và truyền cảm hứng về lòng
            yêu nước, tự hào dân tộc.
          </Typography>
        </Box>
      </Box>
      {/* Clock và HeaderEffect - chỉ hiện từ md trở lên */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column", // Sắp xếp theo chiều dọc
          alignItems: "flex-end", // Căn phải
          gap: 1, // Khoảng cách giữa Clock và HeaderEffect
          width: "auto", // Cho phép tự điều chỉnh chiều rộng
        }}
      >
        <Box sx={{ marginRight: "1px" }}> {/* Clock với khoảng cách lề phải 5px */}
          <Clock sx={{ fontSize: "0.9rem" }} /> {/* Giảm kích thước font nếu cần */}
        </Box>
        <HeaderEffect /> {/* Hiệu ứng bên dưới, không dùng absolute */}
      </Box>
    </Box>
  );
};

export default Header;