import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Historys from "./pages/Historys";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventPage from "./pages/EventPage";
import BackToTopButton from "./components/rightSideBar/BackToTop";
import Navbar from "./components/Navbar";
import QuizHistory from "./pages/QuizHistory";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./pages/MainLayout";
import Banner from "./components/Home/Banner";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic";
import Loading from "./components/Loading"; // Import Loading
import React from "react"; // Import React tĩnh ở đầu file

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(67, 150, 233)",
    },
    secondary: {
      main: "rgb(237, 62, 50)",
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = React.useState(true); // Sử dụng React đã import

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />
          <Header />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <MainLayout>
                    <Home />
                  </MainLayout>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              }
            />
            <Route
              path="/history"
              element={
                <MainLayout>
                  <Historys />
                </MainLayout>
              }
            />
            <Route
              path="/events"
              element={
                <MainLayout>
                  <EventPage />
                </MainLayout>
              }
            />
            <Route
              path="/quiz-history"
              element={
                <MainLayout>
                  <QuizHistory />
                </MainLayout>
              }
            />
          </Routes>
          <Footer />
          <BackgroundMusic />
          <BackToTopButton />
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;