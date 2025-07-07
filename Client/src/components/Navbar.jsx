import { NavLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import { useState } from "react";

const menuItems = [
  { text: "Trang Chủ", path: "/", icon: <HomeIcon /> },
  { text: "Dấu Mốc Lịch Sử", path: "/about", icon: <EmojiEventsIcon /> },
  { text: "Sự Kiện Nổi Bật", path: "/events", icon: <EventIcon /> },
  { text: "Lịch Sử", path: "/history", icon: <HistoryIcon /> },
  { text: "Đố Vui Lịch Sử", path: "/quiz-history", icon: <QuizTwoToneIcon /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "#083ca4",
        height: "100%",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "rgba(252, 250, 242, 255)" : "rgba(252, 250, 242, 255)",
                width: "100%",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "rgba(252, 250, 242, 255)",
                  "& .MuiListItemIcon-root": {
                    color: "rgba(252, 250, 242, 255)",
                  },
                },
              })}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "inherit",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText sx={{ fontSize: "2rem" }} primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          background: "#083ca4",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
          py: 1,
        }}
      >
        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, p: 1 }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon sx={{ color: "rgba(252, 250, 242, 255)" }} />
          </IconButton>
        </Box>

        {/* Desktop menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            padding: "0 10px",
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={item.text}
              sx={{
                position: "relative",
                "&:not(:last-child)::after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1px",
                  height: "20px",
                  backgroundColor: "rgba(252, 250, 242, 255)",
                },
              }}
            >
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "rgb(241, 227, 32)" : "rgba(252, 250, 242, 255)",
                  padding: "8px 18px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  "&:hover": {
                    color: "rgb(241, 227, 32)",
                    "& .MuiSvgIcon-root": {
                      color: "rgb(241, 227, 32)",
                    },
                  },
                })}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "inherit",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </Box>
                {item.text}
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 220,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;