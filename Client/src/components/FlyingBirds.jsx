import { motion } from "framer-motion"; // Import thư viện Framer Motion để tạo hiệu ứng chuyển động
import { useEffect, useState } from "react"; // Import useEffect và useState từ React
import Lottie from "lottie-react"; // Import Lottie để hiển thị animation JSON
import flyingBirdUrl from "/animations/flying-bird.json?url"; // Import đường dẫn URL của file JSON animation từ thư mục public

const FlyingBirds = () => {
  // Khai báo state để lưu danh sách các con chim
  const [birds, setBirds] = useState([]);
  // Khai báo state để lưu dữ liệu JSON của animation
  const [animationData, setAnimationData] = useState(null);

  // useEffect để tải dữ liệu JSON của animation khi component được render
  useEffect(() => {
    fetch(flyingBirdUrl) // Gửi yêu cầu tải file JSON từ URL
      .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
      .then((data) => setAnimationData(data)) // Lưu dữ liệu JSON vào state
      .catch((error) => console.error("Lỗi khi tải dữ liệu animation:", error)); // Xử lý lỗi nếu có
  }, []); // Chỉ chạy một lần khi component mount

  // useEffect để tạo và quản lý các con chim bay
  useEffect(() => {
    // Tạo interval để thêm chim mới mỗi 5 giây
    const interval = setInterval(() => {
      setBirds((prev) => [
        ...prev,
        {
          id: Date.now(), // ID duy nhất dựa trên thời gian
          startX: -100, // Vị trí ban đầu ngoài màn hình (bên trái)
          startY: Math.random() * 80 + 10, // Vị trí Y ngẫu nhiên từ 10% đến 90% chiều cao màn hình
          duration: Math.random() * 3 + 2, // Thời gian di chuyển ngẫu nhiên từ 2 đến 5 giây
          hasLanded: false, // Trạng thái ban đầu: chim chưa hạ cánh
        },
      ]);

      // Xóa chim sau 6 giây nếu chưa hạ cánh
      setTimeout(() => {
        setBirds((prev) =>
          prev.filter((bird) => Date.now() - bird.id < 6000 || bird.hasLanded)
        );
      }, 6000);
    }, 5000); // Tạo chim mới mỗi 5 giây

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Chỉ render các con chim nếu animationData đã được tải */}
      {animationData && birds.map((bird) => (
        <motion.div
          key={bird.id} // Key duy nhất cho mỗi con chim
          style={{
            position: "absolute", // Định vị tuyệt đối để chim bay tự do
            top: `${bird.startY}vh`, // Đặt vị trí Y theo phần trăm chiều cao màn hình
            zIndex: 10, // Đảm bảo chim hiển thị trên các phần tử khác
            width: "150px", // Giới hạn chiều rộng
            height: "150px", // Giới hạn chiều cao
            overflow: "hidden", // Ẩn phần vượt ra ngoài
          }}
          initial={{ x: bird.startX }} // Vị trí ban đầu (ngoài màn hình bên trái)
          animate={{
            x: bird.hasLanded ? `${Math.random() * 90 + 5}vw` : "110%", // Di chuyển đến vị trí ngẫu nhiên hoặc ra ngoài màn hình
          }}
          transition={{
            duration: bird.duration, // Thời gian di chuyển
            ease: "linear", // Hiệu ứng chuyển động tuyến tính
            onComplete: () => {
              // Khi hoàn thành chuyển động
              if (!bird.hasLanded) {
                setBirds((prev) =>
                  prev.map((b) =>
                    b.id === bird.id ? { ...b, hasLanded: true } : b
                  )
                ); // Cập nhật trạng thái hạ cánh
              }
            },
          }}
        >
          <Lottie
            animationData={animationData} // Sử dụng dữ liệu JSON đã tải
            loop={false} // Không lặp lại animation
            autoplay={true} // Tự động phát animation
            style={{
              width: "100%", // Điền đầy container
              height: "100%", // Điền đầy container
              objectFit: "contain", // Giữ tỷ lệ và không giãn
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default FlyingBirds; // Xuất component để sử dụng trong ứng dụng