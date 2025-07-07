import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ExplanationDialog = ({ open, onClose, isCorrect, explanation }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          bgcolor: isCorrect ? "success.light" : "error.light",
          color: "white",
        }}
      >
        {isCorrect ? "Chính xác!" : "Chưa đúng!"}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {explanation}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Câu tiếp theo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExplanationDialog;
