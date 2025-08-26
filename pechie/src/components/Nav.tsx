import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavProps{
    page?: string;
}


const Nav = ({page ="WORKS"}: NavProps) => {
    const navigate = useNavigate();

    const goHome = () =>{
        navigate('/')
    }

    const [expandBox, setExpandBox] = useState(false);
    return(
        <>
            <article className="w-[207px] cursor-pointer" 
            onMouseEnter={()=> setExpandBox(true)}  
            onMouseLeave={()=> setExpandBox(false)} 
            onClick={goHome}>
                    <div className="flex flex-col items-center ">
                        <div className={`w-[89px] h-[89px] bg-[var(--primary)] transition-all duration-[300ms]
                                        ${expandBox?`w-[100px] h-[100px]`: ``}`}>

                        </div>

                        <h1> {page}</h1>
                    </div>
            </article>
        </>
    );
}

export default Nav;