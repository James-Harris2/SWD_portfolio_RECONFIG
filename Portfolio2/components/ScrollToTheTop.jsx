import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top smoothly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Add smooth scrolling for better UX
    });
  }, [pathname]); // Trigger only on pathname changes

  return null; // This component doesn't render any UI
}

export default ScrollToTop;
