require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

// Kết nối MongoDB với tùy chọn TLS cho MongoDB Atlas
mongoose.connect(uri, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(() => console.log("✅ Kết nối MongoDB Atlas thành công"))
  .catch((err) => console.error("❌ Kết nối thất bại:", err));

// Import routes (đảm bảo tên file khớp với thư mục)
const quoteRoutes = require('./routes/quotes');
const timelineRoutes = require('./routes/timeline'); // Sửa thành timeline.js nếu file là timeline.js
const eventRoutes = require('./routes/events');
const historyEventRoutes = require('./routes/historyEvents');
const quizRoutes = require('./routes/quizQuestions'); // Giả sử quiz.js thay vì quizQuestions.js

// Sử dụng routes
app.use('/api/quotes', quoteRoutes);
app.use('/api/timelines', timelineRoutes); // Đảm bảo endpoint khớp với file
app.use('/api/events', eventRoutes);
app.use('/api/history-events', historyEventRoutes);
app.use('/api/quiz', quizRoutes);

// Route mặc định
app.get("/", (req, res) => {
  res.send("API đang chạy...");
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});