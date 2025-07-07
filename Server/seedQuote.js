const mongoose = require('mongoose');
const Quote = require('./models/Quote');
const { quotes } = require('../Client/src/data/Quotes');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test, không dùng ở production
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(async () => {
    await Quote.deleteMany({});
    await Quote.insertMany(quotes);
    console.log("✅ Dữ liệu Quotes đã được thêm vào MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Lỗi kết nối hoặc thêm dữ liệu:", err);
    process.exit(1);
  });