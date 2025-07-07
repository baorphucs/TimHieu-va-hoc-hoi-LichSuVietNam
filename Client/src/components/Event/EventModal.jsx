import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EventModal = ({ open, onClose, event, themeColor }) => {
  if (!event) return null;

  //  extract YouTube
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // hàm render content + image + thụt html tag
  const renderContent = (content) => {
    if (!content) return null;

    const paragraphs = content.split("<br />");

    return paragraphs.map((paragraph, index) => {
      const hasImage = paragraph.includes("[img]");

      if (hasImage) {
        const parts = paragraph.split("[img]");
        const imageContent = parts[1].split("[/img]")[0];
        const text = parts[0] + (parts[1].split("[/img]")[1] || "");
        const [imageUrl, caption] = imageContent.split("|");

        return (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                textIndent: "20px",
                mb: 2,
                lineHeight: 1.8,
                textAlign: "justify",
              }}
            >
              {text}
            </Typography>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={imageUrl}
                alt={caption || "Event detail"}
                sx={{
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              {caption && (
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    color: "text.secondary",
                    fontSize: "1rem",
                    mt: 0.5,
                    mb: 1,
                    fontStyle: "italic",
                    opacity: 0.8,
                    backgroundColor: "rgba(0,0,0,0.02)",
                    py: 0.5,
                    px: 1,
                    borderRadius: "4px",
                    maxWidth: "80%",
                    mx: "auto",
                  }}
                >
                  {caption}
                </Typography>
              )}
            </Box>
          </Box>
        );
      }

      return (
        <Typography
          key={index}
          variant="body1"
          sx={{
            textIndent: "20px",
            mb: 2,
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          {paragraph}
        </Typography>
      );
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{
          background: ` ${themeColor}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            flex: 1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {event.title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ px: 3, py: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
              }}
            >
              <CalendarTodayIcon sx={{ mr: 1, color: themeColor }} />
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                {event.date}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
              }}
            >
              <LocationOnIcon sx={{ mr: 1, color: themeColor }} />
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                {event.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        {event.video ? (
          <Box sx={{ px: 3, mb: 3 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 Aspect Ratio
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  event.video
                )}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Box>
          </Box>
        ) : (
          <Box sx={{ px: 3, mb: 3 }}>
            <Box
              component="img"
              src={event.image}
              alt={event.title}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        )}

        <Box sx={{ p: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: "rgba(0, 119, 255, 0.08)",
              borderRadius: "12px",
              border: "1px solid rgba(0, 119, 255, 0.2)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1.8,
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              {event.description}
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: "rgba(0,0,0,0.02)",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {renderContent(event.details)}
          </Paper>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
