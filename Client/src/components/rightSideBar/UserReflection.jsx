import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Marquee from "react-fast-marquee";

const UserReflection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setFeedbacks([
        ...feedbacks,
        {
          name,
          message,
          id: Date.now(),
          timestamp: new Date().toLocaleString("vi-VN"),
        },
      ]);
      setName("");
      setMessage("");
    }
  };

  return (
    <Paper
      elevation={11}
      sx={{
        m: 2,
        p: 3,
        borderRadius: 2,
        background: "white",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,

          fontWeight: "bold",
        }}
      >
        <FavoriteIcon sx={{ color: theme.palette.secondary.main }} />
        Lời tri ân
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Lời tri ân"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          fullWidth
          sx={{
            mt: 2,
            background: `linear-gradient(135deg,rgb(213, 92, 92),rgb(251, 209, 0))`,
            "&:hover": {
              background: `linear-gradient(135deg,rgb(255, 163, 163),rgb(255, 247, 210))`,
              color: "black",
            },
          }}
        >
          Gửi cảm nghĩ
        </Button>
      </form>

      {feedbacks.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "rgb(253, 0, 0)",
              fontWeight: "medium",
            }}
          >
            Lời tri ân đã gửi:
          </Typography>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left"
          >
            {feedbacks.map((feedback) => (
              <Card
                key={feedback.id}
                sx={{
                  m: 1,
                  minWidth: 280,
                  maxWidth: 350,
                  display: "inline-block",
                  background:
                    "linear-gradient(45deg, #f5f5f5 30%, #ffffff 90%)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {feedback.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, fontStyle: "italic" }}
                  >
                    {feedback.message}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mt: 1, opacity: 0.7 }}
                  >
                    {feedback.timestamp}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </Box>
      )}
    </Paper>
  );
};

export default UserReflection;
