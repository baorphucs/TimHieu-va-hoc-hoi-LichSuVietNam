import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediatelynp
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Changed from "smooth" to "instant" for immediate effect
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
