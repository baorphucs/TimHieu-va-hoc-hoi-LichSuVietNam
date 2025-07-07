import { Col, Row, Container } from "react-bootstrap";
import BacHoQuote from "../components/rightSideBar/BacHoQuote";
import UserReflection from "../components/rightSideBar/UserReflection";
import { Box } from "@mui/material";
import "../styles/MainLayout.css"; // Import CSS file for custom styles
import FlyingBirds from "../components/FlyingBirds"; // Import component FlyingBirds

const MainLayout = ({ children }) => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "rgba(252,250,242,255)", // Thay đổi màu nền
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <FlyingBirds /> {/* Thêm component FlyingBirds ở đây */}
      <Row>
        {/* Cột chính (Main Content) */}
        <Col xs={12} md={8} lg={9}>
          <Box sx={{ p: { xs: 2, md: 3 } }}>{children}</Box>
        </Col>

        {/* Sidebar */}
        <Col xs={12} md={4} lg={3}>
          <UserReflection />

          <Box
            className="sticky-sidebar"
            sx={{
              py: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <BacHoQuote />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;