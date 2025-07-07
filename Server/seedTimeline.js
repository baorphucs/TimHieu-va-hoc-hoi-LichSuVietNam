const mongoose = require('mongoose');
const Timeline = require('./models/Timeline');
const { hoChiMinhTimeline } = require('../Client/src/data/HoChiMinhTimeLine');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test, không dùng ở production
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(async () => {
    await Timeline.deleteMany({});
    await Timeline.insertMany(hoChiMinhTimeline);
    console.log("✅ Dữ liệu timeline đã được thêm vào MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Lỗi khi kết nối MongoDB hoặc nạp dữ liệu:", err);
    process.exit(1);
  });