import { useState } from "react";


type ButtonType = "primary" | "secondary" | "dark"


interface ButtonProps{
    text?: string;
    type?: ButtonType;
}


const Button = ({text="", type="primary"}:ButtonProps) =>{


    const [displayText, setDisplayText] = useState(text);

    const onEnter = () =>{
        setDisplayText(prev => prev + " " + "↗")
    }

    const colorClass: Record<ButtonType, string> = {
        primary: "bg-[var(--primary)] text-white",
        secondary: "bg-white text-black border border-black",
        dark: "bg-black text-white"
    }

        const colorClassHover: Record<ButtonType, string> = {
        primary: "hover:bg-white hover:text-black hover:border hover:border-black",
        secondary: "hover:bg-black hover:text-white",
        dark: "hover:bg-white hover:text-black hover:border hover:border-black"
    }
    return(
        <>
            <button onMouseEnter={onEnter} onMouseLeave={() => setDisplayText(text)} className={`${colorClass[type]} w-[118px] hover:w-[146px] h-[29px] rounded-xl ${colorClassHover[type]} transition-all duration-[300ms]`}>
                {displayText}
            </button>
        </>
    )
}

export default Button;