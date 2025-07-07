const mongoose = require('mongoose');
const HistoryEvent = require('./models/HistoryEvent');
const { historicalEvents } = require('../Client/src/data/HistorysEvent');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Chỉ dùng cho test, không dùng ở production
  tlsAllowInvalidHostnames: true,   // Chỉ dùng cho test
})
  .then(async () => {
    await HistoryEvent.deleteMany({});
    await HistoryEvent.insertMany(historicalEvents);
    console.log("✅ Dữ liệu lịch sử đã được thêm vào MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Lỗi khi thêm dữ liệu:", err);
    process.exit(1);
  });