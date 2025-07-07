import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ReactPlayer from "react-player";
import { FaQuoteLeft, FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HistoryDetail = ({ show, onHide, selectedEvent }) => {
  return (
    <Dialog
      open={show}
      onClose={onHide}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 2,
          boxShadow: 6,
          mt: "100px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          background: "rgb(235, 116, 116)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          {selectedEvent?.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ my: 3 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ alignItems: "center", mb: 2 }}
          >
            <FaRegCalendarAlt
              size={30}
              style={{ marginRight: 8, color: "rgb(241, 76, 64)" }}
            />
            {selectedEvent?.date} {""}
            {selectedEvent?.description}
          </Typography>
        </Box>

        {/* Video Player */}
        {selectedEvent?.video && (
          <Box sx={{ mb: 3, position: "relative", paddingTop: "56.25%" }}>
            <ReactPlayer
              url={selectedEvent.video}
              width="100%"
              height="100%"
              controls
              playing={false}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                  },
                },
              }}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Box>
        )}

        {/* Quote */}
        <Box
          sx={{
            borderLeft: "4px solid",
            borderColor: "primary.main",
            pl: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontStyle: "italic", textAlign: "justify" }}
          >
            <FaQuoteLeft
              style={{
                marginRight: 8,
                color: "rgb(241, 76, 64)",
              }}
            />
            {selectedEvent?.quote}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHide} variant="contained" color="secondary">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HistoryDetail;
