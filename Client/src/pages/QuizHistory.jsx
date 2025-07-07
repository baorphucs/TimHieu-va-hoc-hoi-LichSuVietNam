import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Stack,
  Paper,
  Typography,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import StartScreen from "../components/Quiz/StartScreen";
import QuizQuestionCard from "../components/Quiz/QuizQuestionCard";
import ExplanationDialog from "../components/Quiz/ExplanationDialog";
import QuizResult from "../components/Quiz/QuizResult";

const QuizHistory = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState({
    isCorrect: false,
    explanation: "",
  });
  const [soundEnabled, setSoundEnabled] = useState(false); // Mặc định tắt âm thanh
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const quizAudioRef = useRef(null);
  const previousMusicState = useRef(null);

  useEffect(() => {
    if (window.pauseBackgroundMusic) {
      previousMusicState.current = localStorage.getItem("musicMuted");
      window.pauseBackgroundMusic();
    }

    const quizAudio = new Audio();
    quizAudio.src = "./quizMute.mp3";
    quizAudio.volume = 1;
    quizAudio.loop = true;
    quizAudioRef.current = quizAudio;

    fetchQuizData();

    return () => {
      if (quizAudioRef.current) {
        quizAudioRef.current.pause();
        quizAudioRef.current = null;
      }
      if (previousMusicState.current !== null) {
        localStorage.setItem("musicMuted", previousMusicState.current);
        setTimeout(() => {
          if (window.startBackgroundMusic) {
            window.startBackgroundMusic();
          }
        }, 100);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive]);

  const fetchQuizData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/quiz");
      if (!response.ok) throw new Error(`Không thể tải dữ liệu: ${response.status}`);
      const data = await response.json();
      console.log("Dữ liệu từ API:", data);
      if (Array.isArray(data)) {
        setQuestions(data); // Nếu API trả về mảng trực tiếp
      } else if (data.questions && Array.isArray(data.questions)) {
        setQuestions(data.questions); // Nếu API trả về { questions: [...] }
      } else {
        throw new Error("Dữ liệu câu hỏi không hợp lệ");
      }
    } catch (err) {
      console.error("Lỗi fetch:", err);
      setError(`Đã xảy ra lỗi: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    if (!questions[currentQuestion]) return;
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswerIndex;
    if (isCorrect) setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      { questionIndex: currentQuestion, selectedAnswer, isCorrect },
    ]);

    setCurrentExplanation({
      isCorrect,
      explanation: questions[currentQuestion].explanation || "Không có giải thích.",
    });
    setShowExplanation(true);
    setTimerActive(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      setShowResult(true);
    }
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    handleNextQuestion();
  };

  const handleShare = () => {
    const text = `Tôi đã đạt ${score}/${questions.length} điểm trong bài quiz về lịch sử! Hãy thử thách bản thân bạn!`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(text)}`
    );
  };

  const toggleSound = () => {
    if (quizAudioRef.current) {
      if (soundEnabled) {
        quizAudioRef.current.pause();
      } else {
        quizAudioRef.current
          .play()
          .catch((error) => console.log("Error playing quiz music:", error));
      }
      setSoundEnabled(!soundEnabled);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimerActive(true);
    if (quizAudioRef.current && !soundEnabled) {
      quizAudioRef.current
        .play()
        .catch((error) => console.log("Error playing quiz music:", error));
      setSoundEnabled(true);
    }
  };

  const handleRestartQuiz = () => {
    window.location.reload();
  };

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>{error}</div>;
  if (!quizStarted) return <StartScreen onStartQuiz={handleStartQuiz} />;

  return (
    <Container className="py-5" sx={{ bgcolor: "#f5f5f5" }}>
      <Stack spacing={4}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 2,
            color: "#d32f2f",
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          THỬ TÀI LỊCH SỬ CỦA BẠN NHÉ
        </Typography>

        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 4, bgcolor: "#ffffff", mx: "auto", width: "100%" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              textAlign: "justify",
              fontWeight: 600,
            }}
          >
            Câu hỏi này không chỉ yêu cầu người tham gia nhớ về sự kiện lịch
            sử, mà còn giúp họ nhận thức sâu sắc về sự ảnh hưởng của nó đối
            với dân tộc Việt Nam và toàn thế giới, đồng thời khơi gợi niềm tự
            hào dân tộc.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{ borderRadius: 4, bgcolor: "#ffffff", mx: "auto", width: "100%" }}
        >
          <QuizQuestionCard
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            question={questions[currentQuestion]?.question || ""}
            options={questions[currentQuestion]?.options || []}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onSubmit={handleSubmit}
            timeLeft={timeLeft}
            soundEnabled={soundEnabled}
            onToggleSound={toggleSound}
          />
        </Paper>
      </Stack>

      <ExplanationDialog
        open={showExplanation}
        onClose={handleCloseExplanation}
        isCorrect={currentExplanation.isCorrect}
        explanation={currentExplanation.explanation}
      />

      <QuizResult
        open={showResult}
        onClose={handleRestartQuiz}
        score={score}
        totalQuestions={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onShare={handleShare}
      />
    </Container>
  );
};

export default QuizHistory;