import FeaturedEvents from "../components/Event/FeaturedEvents";
import Events from "../components/Event/Events";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function EventPage() {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/events");
      if (!response.ok) throw new Error(`Không thể tải dữ liệu: ${response.status}`);
      const data = await response.json();
      console.log("Dữ liệu từ API:", data);

      if (!Array.isArray(data) || data.length === 0) {
        console.warn("Dữ liệu từ API rỗng hoặc không phải mảng");
        setAllEvents([]);
        return;
      }

      setAllEvents(data); // Lấy toàn bộ dữ liệu mà không lọc
    } catch (err) {
      console.error("Lỗi fetch:", err);
      setError(`Đã xảy ra lỗi: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Events
        events={allEvents}
        title="CÁC SỰ KIỆN LỊCH SỬ ĐÁNG NHỚ"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
    </>
  );
}

export default EventPage;