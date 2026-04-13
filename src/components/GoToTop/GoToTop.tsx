"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function GoToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center cursor-pointer 
                 rounded-full border border-black/10 bg-white/80 backdrop-blur-md 
                 text-black shadow-sm transition-all duration-300 
                 hover:bg-black hover:text-white hover:-translate-y-2 active:scale-95"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} strokeWidth={1.5} />
        </button>
      )}
    </>
  );
}

export default GoToTop;
