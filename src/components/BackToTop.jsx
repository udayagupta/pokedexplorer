import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

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
    isVisible && (
      <button
        onClick={scrollToTop}
        className="sticky float-right mr-10 bottom-10 z-40 bg-slate-700 p-4 text-lg opacity-90 rounded-[50%] cursor-pointer"
      >
        <FaArrowUp />
      </button>
    )
  );
};
