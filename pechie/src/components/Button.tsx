import { useState } from "react";

type ButtonType = "primary" | "secondary" | "dark";

interface ButtonProps {
  text?: string;
  type?: ButtonType;
  auto?: boolean;
  link?: string;
}

const Button = ({ text = "", type = "primary", auto = false, link }: ButtonProps) => {
  const [displayText, setDisplayText] = useState(text);

  const onEnter = () => {
    setDisplayText((prev) => prev + " ↗");
  };

  const colorClass: Record<ButtonType, string> = {
    primary: "bg-[var(--primary)] text-white",
    secondary: "bg-white text-black border border-black",
    dark: "bg-black text-white",
  };

  const colorClassHover: Record<ButtonType, string> = {
    primary: "hover:bg-white hover:text-black hover:border hover:border-black",
    secondary: "hover:bg-black hover:text-white",
    dark: "hover:bg-white hover:text-black hover:border hover:border-black",
  };

  const navLink = () => {
    if (link) {
      // open in new tab
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={navLink}
      onMouseEnter={onEnter}
      onMouseLeave={() => setDisplayText(text)}
      className={`${colorClass[type]} ${
        auto
          ? "w-auto h-auto p-[15px] rounded-xl"
          : "w-[118px] hover:w-[146px] h-[29px] rounded-xl"
      } ${colorClassHover[type]} transition-all duration-[300ms] cursor-pointer`}
    >
      <h3>{displayText}</h3>
    </button>
  );
};

export default Button;
