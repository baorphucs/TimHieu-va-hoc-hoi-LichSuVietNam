const mongoose = require('mongoose');
const Event = require('./models/Event');
const { hcmEvents } = require('../Client/src/data/Events');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test, không dùng ở production
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(async () => {
    await Event.deleteMany({});
    await Event.insertMany(hcmEvents);
    console.log("✅ Dữ liệu sự kiện đã được thêm vào MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Lỗi khi thêm dữ liệu:", err);
    process.exit(1);
  });