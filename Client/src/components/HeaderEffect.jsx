// src/components/HeaderEffect.jsx
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import chaoMungUrl from "/animations/chao-mung.json?url";

const HeaderEffect = () => {
  const [animationData, setAnimationData] = useState(null);

  // Tải dữ liệu JSON của hiệu ứng "Chào mừng"
  useEffect(() => {
    fetch(chaoMungUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không thể tải file JSON");
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu animation 'Chào mừng':", error);
      });
  }, []);

  return (
    <>
      {animationData && (
        <div
          style={{
            width: "100px", // Giảm kích thước để phù hợp hơn
            height: "100px",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={animationData}
            loop={true} // Lặp lại hiệu ứng
            autoplay={true} // Tự động phát
            style={{
              width: "100%", // Điền đầy container
              height: "100%", // Điền đầy container
              objectFit: "contain", // Giữ tỷ lệ và không giãn
            }}
          />
        </div>
      )}
    </>
  );
};

export default HeaderEffect;