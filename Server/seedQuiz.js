const mongoose = require('mongoose');
const QuizQuestion = require('./models/QuizQuestion');
const { quizQuestions } = require('../Client/src/data/quizData');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test, không dùng ở production
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(async () => {
    await QuizQuestion.deleteMany({});
    await QuizQuestion.insertMany(quizQuestions);
    console.log("✅ Dữ liệu quiz đã được thêm vào MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Lỗi kết nối hoặc thêm dữ liệu:", err);
    process.exit(1);
  });