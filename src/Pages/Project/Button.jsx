import { useEffect, useState } from "react";

function Button() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    const handleScroll = () => {
      if (!aboutSection) return;
      const scrollY = window.scrollY;
      const aboutTop = aboutSection.offsetTop;
      setShowButton(scrollY > aboutTop - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  useEffect(() => {
    if (!showButton) return;

    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    btn.addEventListener("click", handleScrollToTop);
    return () => btn.removeEventListener("click", handleScrollToTop);
  }, [showButton]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.target.closest("a[href^='#']");
      if (!target) return;

      event.preventDefault();
      const section = document.querySelector(target.getAttribute("href"));
      section?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <>
      {showButton && (
        <button
          id="scrollTopBtn"
          className="fixed bottom-5 right-5 px-4 py-2 rounded-lg bg-gray-800 text-white cursor-pointer transition-all duration-300 shadow-lg hover:scale-105"
        >
          <i className="fa-solid fa-rocket mr-2"></i>
          TO TOP
        </button>
      )}
    </>
  );
}

export default Button;
