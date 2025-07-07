/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import { FaVolumeUp, FaVolumeMute, FaPlay } from "react-icons/fa";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(() => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  zIndex: 1000,
  transition: "all 0.3s ease",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
}));

const PlayOverlay = styled(Box)(() => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  padding: "8px",
  cursor: "pointer",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
}));

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);
  const autoplayAttempted = useRef(false);

  useEffect(() => {
    const audio = new Audio();
    // audio.src = "/nhacNen.mp3";
    audio.src = "/135-Nam-Ngay-Sinh-Chu-Tich-Ho-Chi-Minh/nhacNen.mp3"; // sửa chỗ này để ko lỗi deploy
    audio.volume = 0.3;
    audio.loop = true;
    audio.preload = "auto";
    audio.muted = true;
    audioRef.current = audio;

    // tự động phát khi component được mount
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          // sau khi phát thành công, kiểm tra trạng thái muted trong localStorage
          const savedMuted = localStorage.getItem("musicMuted");
          if (savedMuted !== null) {
            const shouldBeMuted = savedMuted === "true";
            setIsMuted(shouldBeMuted);
            audio.muted = shouldBeMuted;
          } else {
            // nếu không có trạng thái lưu trữ, sau 2 giây bật âm thanh lên
            setTimeout(() => {
              audio.muted = false;
              setIsMuted(false);
              localStorage.setItem("musicMuted", "false");
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(
            "không thể tự động phát nhạc do trình duyệt chặn:",
            error
          );
          setShowPlayButton(true);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // hàm bắt đầu phát nhạc khi người dùng click vào nút play
  const startPlaying = async () => {
    if (audioError) {
      console.error("không thể phát nhạc do lỗi tải file");
      return;
    }

    try {
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
        localStorage.setItem("musicMuted", "false");
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    } catch (error) {
      console.error("phát nhạc thất bại:", error);
      setAudioError(true);
    }
  };

  const handleToggle = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      localStorage.setItem("musicMuted", newMutedState.toString());
    }
  };

  // hàm dừng nhạc nền
  const pauseBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  };

  // hàm bật nhạc nền để các component khác có thể gọi
  const startBackgroundMusic = () => {
    if (audioRef.current) {
      const savedMuted = localStorage.getItem("musicMuted");
      if (savedMuted === "false") {
        audioRef.current.muted = false;
        setIsMuted(false);
        audioRef.current.play().catch((error) => {
          console.log("lỗi khi tiếp tục phát nhạc nền:", error);
          setShowPlayButton(true);
        });
      }
    }
  };

  // thêm các hàm điều khiển nhạc vào window object để có thể gọi từ bên ngoài
  useEffect(() => {
    window.pauseBackgroundMusic = pauseBackgroundMusic;
    window.startBackgroundMusic = startBackgroundMusic;

    // thêm event listener để dừng/phát nhạc khi chuyển tab
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && isPlaying) {
          audioRef.current.pause();
        }
      } else {
        if (audioRef.current && isPlaying && !showPlayButton) {
          audioRef.current
            .play()
            .catch((err) => console.log("không thể tiếp tục phát nhạc:", err));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleUserInteraction = () => {
      if (!isPlaying && showPlayButton) {
        startPlaying();
      }
      // xóa event listener sau khi đã xử lý
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      delete window.pauseBackgroundMusic;
      delete window.startBackgroundMusic;
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying, showPlayButton]);

  // kiểm tra xem có đang ở trang quiz không
  const isQuizPage = window.location.pathname.includes("/quiz-history");

  // chỉ ẩn âm thanh nền khi ở trang quiz
  useEffect(() => {
    if (isQuizPage && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (!isQuizPage && audioRef.current && !showPlayButton) {
      audioRef.current.play().catch((error) => {
        console.log("lỗi khi tiếp tục phát nhạc nền:", error);
        setShowPlayButton(true);
      });
    }
  }, [isQuizPage, showPlayButton]);

  if (audioError) {
    return null;
  }

  if (showPlayButton) {
    return (
      <Tooltip title="Bật nhạc nền">
        <PlayOverlay onClick={startPlaying}>
          <FaPlay size={24} color="#1976d2" />
        </PlayOverlay>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}>
      <StyledIconButton onClick={handleToggle} size="large">
        {isMuted ? (
          <FaVolumeMute size={24} color="#1976d2" />
        ) : (
          <FaVolumeUp size={24} color="#1976d2" />
        )}
      </StyledIconButton>
    </Tooltip>
  );
};

export default BackgroundMusic;
