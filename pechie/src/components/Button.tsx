type ButtonType = "primary" | "secondary"


interface ButtonProps{
    text?: string;
    type?: ButtonType;
}


const Button = ({text="", type="primary"}:ButtonProps) =>{

    const colorClass: Record<ButtonType, string> = {
        primary: "bg-[var(--primary)] text-white",
        secondary: "bg-white text-black"
    }
    return(
        <>
            <button className={`${colorClass[type]} w-[118px] h-[29px] rounded-xl`}>
                {`${text?text:"Default"}`}
            </button>
        </>
    )
}

export default Button;