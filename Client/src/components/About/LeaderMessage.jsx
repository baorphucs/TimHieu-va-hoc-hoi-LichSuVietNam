/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import { Accordion, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const LeaderMessage = () => {
  const [activeKey, setActiveKey] = useState(0);
  const messages = [
    {
      title: "Thông điệp từ Tổng Bí thư Tô Lâm",
      content:
        "Chủ tịch Hồ Chí Minh - vị lãnh tụ vĩ đại của dân tộc Việt Nam, người đã dẫn dắt nhân dân ta đi từ thắng lợi này đến thắng lợi khác. Với sự nghiệp cách mạng vĩ đại, Chủ tịch Hồ Chí Minh không chỉ là người thầy của dân tộc mà còn là biểu tượng cao cả của sự hy sinh và cống hiến. Mỗi bước đi của Người là một dấu ấn lịch sử sâu sắc, mở đường cho sự nghiệp giải phóng đất nước, giành lại độc lập tự do cho dân tộc. Nhân kỷ niệm 135 năm ngày sinh của Người, chúng ta càng nhận thức rõ hơn trách nhiệm của mình trong việc bảo vệ và phát huy những giá trị mà Người để lại.",
      image: "./images/TongBiTHuToLam.jpg",
    },
    {
      title: "Thông điệp từ Chủ tịch nước Tô Lâm",
      content:
        "Kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh là dịp để chúng ta ôn lại và phát huy những giá trị tư tưởng, đạo đức, phong cách của Người. Hồ Chí Minh không chỉ là vị lãnh tụ có tầm nhìn chiến lược, mà còn là người đã để lại những bài học quý báu về tinh thần yêu nước, về đạo đức cách mạng, về sự hy sinh vì lợi ích của dân tộc. Tất cả chúng ta, mỗi công dân Việt Nam, đều có trách nhiệm học hỏi và làm theo tấm gương đạo đức của Người trong mọi lĩnh vực của cuộc sống.",
      image: "./images/TongBiTHuToLam.jpg",
    },
    {
      title: "Thông điệp từ Thủ tướng Chính phủ Phạm Minh Chính",
      content:
        "50 năm thống nhất đất nước là một chặng đường vẻ vang của dân tộc ta, là minh chứng hùng hồn cho sức mạnh đại đoàn kết toàn dân tộc. Chiến thắng 30/4/1975 không chỉ là kết quả của một cuộc đấu tranh vĩ đại, mà còn là tầm nhìn chiến lược, sự quyết tâm, kiên cường của nhân dân ta dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhìn lại 50 năm qua, đất nước chúng ta đã đạt được nhiều thành tựu to lớn trên mọi lĩnh vực, từ chính trị, kinh tế đến văn hóa, xã hội. Tuy nhiên, hành trình phát triển vẫn còn dài, và chúng ta phải tiếp tục làm việc chăm chỉ, đoàn kết để xây dựng một Việt Nam giàu mạnh, văn minh, xứng đáng với hy sinh của các thế hệ đi trước.",
      image: "./images/ThuTuongPhamMinhChinh.jpg",
    },
  ];
  return (
    <>
      {/* Messages Section */}
      <section className="mb-5">
        <h2
          className="text-center mb-5"
          initial="initial"
          animate="animate"
          style={{
            position: "relative",
            backgroundSize: "200% 200%",
            color: "rgb(237, 62, 50)",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          THÔNG ĐIỆP HÔM NAY
          <span
            style={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              backgroundColor: "#007bff",
              borderRadius: "2px",
            }}
          />
        </h2>
        <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
          {messages.map((message, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <div className="d-flex align-items-center h4">
                  <Image
                    src={message.image}
                    roundedCircle
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  {message.title}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p
                  className=" mb-5"
                  style={{
                    textAlign: "justify",
                    display: "block",
                    fontSize: "1rem",
                  }}
                >
                  {" "}
                  {message.content}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default LeaderMessage;
