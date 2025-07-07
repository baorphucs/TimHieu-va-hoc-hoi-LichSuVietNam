/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  LinearProgress,
  Box,
  IconButton,
} from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

const QuizQuestionCard = ({
  currentQuestion,
  totalQuestions,
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
  timeLeft,
  soundEnabled,
  onToggleSound,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const getProgressColor = (progress) => {
    if (progress >= 80) return "#B71C1C";
    if (progress >= 60) return "#D32F2F";
    if (progress >= 40) return "#EF5350";
    return "#FFCDD2";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ bgcolor: "background.paper" }}>
        <CardContent>
          <Box className="d-flex justify-content-between align-items-center mb-3">
            <Typography
              variant="h6"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Câu hỏi {currentQuestion + 1}/{totalQuestions}
            </Typography>
            <IconButton
              onClick={onToggleSound}
              sx={{
                color: "secondary.main",
                "&:hover": { color: "secondary.dark" },
              }}
            >
              {soundEnabled ? <VolumeUp /> : <VolumeOff />}
            </IconButton>
          </Box>

          <LinearProgress
            variant="determinate"
            value={progress}
            className="mb-3"
            sx={{
              bgcolor: "rgba(211, 47, 47, 0.1)",
              "& .MuiLinearProgress-bar": {
                bgcolor: getProgressColor(progress),
              },
            }}
          />

          <Typography
            variant="h5"
            className="mb-4"
            sx={{
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            {question}
          </Typography>

          <RadioGroup value={selectedAnswer} onChange={onAnswerSelect}>
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FormControlLabel
                  value={index}
                  control={
                    <Radio
                      sx={{
                        color: "primary.main",
                        "&.Mui-checked": {
                          color: "primary.main",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "text.secondary" }}>
                      {option}
                    </Typography>
                  }
                  className="mb-2"
                  sx={{
                    margin: "8px 0",
                    padding: "8px 16px",
                    borderRadius: 2,
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "rgba(211, 47, 47, 0.05)",
                    },
                  }}
                />
              </motion.div>
            ))}
          </RadioGroup>

          <Box className="d-flex justify-content-between align-items-center mt-4">
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
              }}
            >
              Thời gian còn lại: {timeLeft} giây
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
                disabled={selectedAnswer === null}
                sx={{
                  minWidth: 120,
                  "&:disabled": {
                    bgcolor: "rgba(211, 47, 47, 0.3)",
                  },
                }}
              >
                Trả lời
              </Button>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuizQuestionCard;
