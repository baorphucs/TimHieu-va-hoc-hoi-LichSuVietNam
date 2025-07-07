/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItemIcon,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const QuizResult = ({
  open,
  onClose,
  score,
  totalQuestions,
  userAnswers,
  questions,
  onShare,
}) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return "#B71C1C";
    if (progress >= 60) return "#D32F2F";
    if (progress >= 40) return "#EF5350";
    return "#FFCDD2";
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DialogTitle
          sx={{
            bgcolor: "primary.main",
            color: "white",
            textAlign: "center",
            py: 3,
            position: "relative",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Kết quả của bạn
          </Typography>
        </DialogTitle>
        <DialogContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Box className="text-center my-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: { xs: "3rem", sm: "4rem" },
                  }}
                >
                  {score}/{totalQuestions}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 4,
                  }}
                >
                  {score === totalQuestions
                    ? "🎉 Xuất sắc! Bạn là một chuyên gia lịch sử!"
                    : score >= totalQuestions * 0.7
                    ? "👏 Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
                    : "💪 Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Box sx={{ mb: 4 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(score / totalQuestions) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      bgcolor: "rgba(211, 47, 47, 0.1)",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: getProgressColor(
                          (score / totalQuestions) * 100
                        ),
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </motion.div>

          <Typography
            variant="h6"
            className="mb-3"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              borderBottom: "2px solid",
              borderColor: "primary.main",
              pb: 1,
            }}
          >
            Chi tiết các câu trả lời:
          </Typography>

          <List>
            {userAnswers.map((answer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      bgcolor: answer.isCorrect
                        ? "success.light"
                        : "error.light",
                      color: "white",
                      "&:hover": {
                        bgcolor: answer.isCorrect
                          ? "success.main"
                          : "error.main",
                      },
                    }}
                  >
                    <Box className="d-flex align-items-center w-100">
                      <ListItemIcon sx={{ color: "white" }}>
                        {answer.isCorrect ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </ListItemIcon>
                      <Typography sx={{ fontWeight: 500 }}>
                        Câu {index + 1}: {questions[index].question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                        gutterBottom
                      >
                        Đáp án của bạn:
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {questions[index].options[answer.selectedAnswer]}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                        className="mt-3"
                        gutterBottom
                      >
                        Đáp án đúng:
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {
                          questions[index].options[
                            questions[index].correctAnswerIndex
                          ]
                        }
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                        className="mt-3"
                        gutterBottom
                      >
                        Giải thích:
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {questions[index].explanation}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </motion.div>
            ))}
          </List>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "center" }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onShare}
              startIcon={<ShareIcon />}
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2 }}
            >
              Chia sẻ kết quả
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onClose}
              variant="outlined"
              color="primary"
              size="large"
            >
              Làm lại
            </Button>
          </motion.div>
        </DialogActions>
      </motion.div>
    </Dialog>
  );
};

export default QuizResult;
