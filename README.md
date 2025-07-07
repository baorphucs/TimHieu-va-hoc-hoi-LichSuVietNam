# 🎉 Website Tìm hiểu và học hỏi- Lịch sử Việt Nam

<div align="center">
  <h2>🌐 Link Website: <a href="#">#</a></h2>
</div>

## 📋 Mục lục

- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [Hướng dẫn Deploy](#-hướng-dẫn-deploy)
- [Demo](#-demo)
- [Giới thiệu](#-giới-thiệu)
- [Mô tả các trang](#-mô-tả-các-trang)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Tác giả](#-tác-giả)

## 💻 Hướng dẫn cài đặt

### Yêu cầu hệ thống

- Node.js (v14.0.0 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. Clone repository:

```bash
git clone #
```

hoặc
\*Lưu ý: ở github vndhieutrum đây là dự án deploy

```bash
git clone #
```

2. Cài đặt dependencies:

```bash
npm install
# hoặc
yarn install
```

3. Chạy dự án ở môi trường development:

```bash
npm run dev
# hoặc
yarn dev
```

## 🚀 Hướng dẫn Deploy

### 1. Cài đặt Git

```bash
# Kiểm tra Git đã cài đặt
git --version

# Nếu chưa có, tải và cài đặt từ https://git-scm.com/
```

### 2. Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Click "New repository"
3. Đặt tên repository
4. Chọn "Public"
5. Click "Create repository"

### 3. Push code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin #
git push -u origin main
```

### 4. Cấu hình GitHub Pages

1. Vào repository Settings
2. Scroll xuống phần "GitHub Pages"
3. Chọn branch "gh-pages"
4. Click "Save"

### 5. Cài đặt gh-pages

```bash
npm install gh-pages --save-dev
```

### 6. Cấu hình package.json

![alt text]({3D217506-0763-4402-ADE5-83295A54B885}.png)

```json
{
  "homepage": "https://[Username github của bạn].github.io/[Tên repository bạn đã tạo trước đó]/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 7. Cấu hình vite.config.js

\*Đừng quên vite.config.js nhé

![alt text]({653513E0-A4E0-4015-80CE-BBD98C73A8F2}.png)
\*Lưu ý: tạo thêm base: "/[Tên repository bạn đã tạo trước đó]/", để đồng bộ đường đãn tránh lỗi path không mong muốn

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/[Tên repository bạn đã tạo trước đó]/",
});
```

### 8. Điều chỉnh route trong App.jsx

\*Lưu ý: trong môi trường dev thì sử dụng BrowserRouter as Router nhưng deploy thì phải chuyển thành HashRouter để có thể điêu hướng trang

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

```javascript
import { HashRouter as Router, Routes, Route } from "react-router-dom";
```

![alt text]({C09E23DD-DD0F-450E-9A48-8D4A2DC2A7E6}.png)

### 9. Deploy

```bash
npm run deploy
```

## 📸 Demo

<div style="display: block" align="center">
  <h3>🎯 Trang Chủ</h3>

![alt text]({83B2C2B0-9EDB-486A-8C41-75AAE0AD54FC}.png)
![alt text]({EB3E8DD3-6F4C-454E-9808-79AD2112B547}.png)

 <h3>🎮 Con Đường Độc Lập</h3>
 
 ![alt text]({E60FC02B-331B-444D-8F93-AF9AF1F8676C}.png)
  <h3>📅 Timeline</h3>

![alt text]({3619E791-4517-407A-BC93-787F52A4183E}.png)
![alt text]({C9255F21-7706-40C5-9648-38B1CDF54603}.png)

  <h3>🎮 Góc Tự Hào</h3>

![alt text]({ED206985-2F85-4C5B-AE1C-9FF870DAF5FB}.png)
![alt text]({6EC0E22D-031E-460F-B5C1-2C9409BB6CA3}.png)
![alt text]({AE416173-A4A6-4D74-98F1-6F503180AB68}.png)

  <h3>🎮 Đố vui lịch sử</h3>

![alt text]({558ECA1C-D81C-4E65-96B2-90D95CF63874}.png)
![alt text]({2409924C-FAD5-4AAA-95FE-FA613D7C4F21}.png)
![alt text]({B315A643-13FF-4A9D-9E6F-36F7DA9D7C5B}.png)
![alt text]({9C74B1C5-8FA7-43C0-8F09-9CB91861F066}.png)
![alt text]({D78646E9-76EC-4DB3-81B0-67A2560063C3}.png)


  <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
    <h3>🔗 Truy cập website</h3>
    <p>
      <a href="https://vndhieutrum.github.io/50-nam-giai-phong-135-nam-ngay-sinh-bac-ho/" target="_blank" style="color: #007bff; text-decoration: none; font-weight: bold;">
        👉 Click để xem website trực tiếp
      </a>
    </p>
  </div>
</div>

## 🎯 Giới thiệu

Website được xây dựng nhằm kỷ niệm hai sự kiện lịch sử trọng đại của dân tộc:

- 50 năm Giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2025)
- 135 năm ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 - 19/5/2025)

Dự án không chỉ là một nền tảng thông tin mà còn là công cụ giáo dục, giúp thế hệ trẻ hiểu rõ hơn về lịch sử dân tộc và tầm quan trọng của những sự kiện lịch sử này.

## 📑 Mô tả các trang

### 1. Trang Chủ (Home)

- **Hero Section**: Banner lớn với hình ảnh biểu tượng và thông điệp chính
- **Giới thiệu**: Tóm tắt về hai sự kiện lịch sử
- **Tin tức mới**: Các hoạt động kỷ niệm mới nhất
- **Thống kê**: Số liệu về các hoạt động kỷ niệm
- **Call-to-action**: Nút dẫn đến các trang chi tiết

### 2. Trang Timeline

- **Dòng thời gian tương tác**: Hiển thị các mốc sự kiện quan trọng
- **Chủ tịch Hồ Chí Minh**: Các mốc thời gian trong cuộc đời Bác
- **Giải phóng miền Nam**: Các sự kiện lịch sử từ 1973-1975
- **Hiệu ứng**: Animation khi cuộn và hover
- **Modal chi tiết**: Hiển thị thông tin chi tiết khi click vào sự kiện

### 3. Trang Gallery

- **Slider hình ảnh**: Trình chiếu ảnh tư liệu lịch sử
- **Video tư liệu**: Phát video tư liệu với React Player
- **Bộ lọc**: Lọc theo năm, sự kiện, địa điểm
- **Lightbox**: Xem ảnh full màn hình
- **Chia sẻ**: Nút chia sẻ lên mạng xã hội

### 4. Trang Đố vui

- **Trắc nghiệm**: Câu hỏi về lịch sử
- **Điểm số**: Tính điểm và xếp hạng
- **Chứng chỉ**: Tạo chứng chỉ hoàn thành
- **Lưu kết quả**: Lưu điểm số vào localStorage
- **Chia sẻ**: Chia sẻ kết quả lên mạng xã hội

### 5. Trang Góp ý

- **Form liên hệ**: Điền thông tin và gửi góp ý
- **Bản đồ**: Hiển thị địa điểm tổ chức sự kiện
- **Thông tin liên hệ**: Email, điện thoại, địa chỉ
- **Giờ làm việc**: Thời gian tiếp nhận góp ý
- **Xác nhận**: Email xác nhận sau khi gửi

### 6. Trang Giới thiệu

- **Về dự án**: Mục đích và ý nghĩa
- **Ban tổ chức**: Thông tin về team
- **Đối tác**: Logo các đơn vị tham gia
- **Liên kết**: Link đến các trang liên quan
- **FAQ**: Câu hỏi thường gặp

## ✨ Tính năng

<div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background-color: #e9ecef;">
<th style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6;">Tính năng</th>
<th style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6;">Mô tả</th>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">🎨 Giao diện</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Thiết kế hiện đại, responsive trên mọi thiết bị (Mobile, Tablet, Desktop)</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">📸 Trình chiếu</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Slider hình ảnh và video tư liệu lịch sử với hiệu ứng chuyển động mượt mà</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">📅 Timeline</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Các mốc thời gian quan trọng trong cuộc đời Chủ tịch Hồ Chí Minh và lịch sử giải phóng miền Nam</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">🎵 Âm thanh</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Nhạc nền và âm thanh tư liệu lịch sử, có thể tắt/bật</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">🎮 Tương tác</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Modal chi tiết sự kiện, hiệu ứng chuyển động mượt mà với Framer Motion</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">🔍 Đố vui lịch sử</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Trắc nghiệm kiến thức lịch sử về Chủ tịch Hồ Chí Minh và sự kiện giải phóng miền Nam</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">📝 Góp ý</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Form để lại lời nhắn, góp ý và lời chúc tốt đẹp</td>
</tr>
<tr>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">🌐 Đa ngôn ngữ</td>
<td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Hỗ trợ tiếng Việt và tiếng Anh</td>
</tr>
</table>
</div>

## 🛠️ Công nghệ sử dụng

- **Frontend Framework**: React.js
- **UI Framework**: Material-UI (MUI), Bootstrap
- **Animation**: Framer Motion
- **Media Player**: React Player
- **Carousel**: React Slick
- **Build Tool**: Vite
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: GitHub Pages

## 📁 Cấu trúc dự án

```
public/
├── images/....
├── videos/...
├── nhacNen.mp3
├── quizMute.mp3
├── UTE.png
src/
├── components/
│   ├── About/
│   │   ├── AboutHCM.jsx
│   │   |── Celebrate.jsx
│   │   |── HistoricalMessage.jsx
│   │   └── LeaderMessage.jsx
│   ├── BackgroundMusic/
│   │   ├── BackgroundMusic.jsx
│   │   ├── Event/
│   │   │   ├── EventModal.jsx
│   │   │   ├── Events.jsx
│   │   │   └── FeaturedEvents.jsx
│   │   ├── Historys/
│   │   │   └── HistoryDetail.jsx
│   │   ├── Home/
│   │   │   ├── Banner.jsx
│   │   │   └── HoChiMinhTimeLine.jsx
│   │   ├── RightSideBar/
│   │   │   ├── BacHoQuote.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   └── UserReflection.jsx
│   │   ├── Clock.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   ├── data/.....lưu trữ dữ liệu ....
│   ├── page/
│   │   ├── About.jsx
│   │   ├── EventPage.jsx
│   │   ├── Historys.jsx
│   │   ├── Home.jsx
│   │   ├── MainLayout.jsx
│   │   └── QuizHistory.jsx
│   ├── style/....
│   ├── App.jsx
│   └── main.jsx
```

## 👨‍💻 Tác giả

- **Họ và tên**: PhamNgocBaoPhuc
- **Mã sinh viên**: 2200001971
- **Lớp**: 22DTH3B
- **GitHub**: [BaorPhucs](https://github.com/baorphucs)

---

<div align="center" style="margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">
    Website được thực hiện nhằm tôn vinh giá trị lịch sử dân tộc và thể hiện lòng tri ân các thế hệ đi trước. Cảm ơn bạn đã ghé thăm!
  </p>
</div>
