import { useState } from "react";
import arrow from "../assets/arrow.png"

type Work = {
    name:string
}

type NavBarProps = {
    works?: Work[];
    activeWorkName?: string;
    onSelect?: (workName: string) => void;
}



const NavBar = ({works=[], activeWorkName, onSelect}:NavBarProps) =>{
    const [active, setActive] = useState(works[0].name);
    const [hovering, setHovering] = useState(false);

    const handleActive = (item:string) =>{
        setActive(item);
        onSelect?.(item)
    }

    return(

        <>
            <div className="flex flex-col">
                <ul>
                {works.map((work, index) => {
                    const isActive = work.name === active;
                    return(
                        <>
                    <li key={index}>
                        <div 
                        onMouseEnter={()=>setHovering(true)} 
                        onMouseLeave={()=>setHovering(false)} 
                        onClick={() => {handleActive(work.name)}} 
                        className="flex flex-row ">
                            <div className={`w-[33px] h-[33px] ${hovering && isActive?'-translate-x-4':'translate-x-0'} transition-all duration-[200ms]`}>
                                {isActive && <img src={arrow} />}
                            </div>
                            <div className={isActive? `w-[239px] h-[31px] text-black  bg-[var(--white)] hover:text-black  hover:bg-white border border-var[(--dark)]] cursor-pointer transition-all duration-[300ms]` 
                                                        :
                                                      `w-[239px] h-[31px] text-white  bg-[var(--dark)] hover:text-white  hover:bg-[var(--primary)] border border-var[(--dark)]] cursor-pointer transition-all duration-[300ms]`}>
                                <h4 className="text-center">{work.name}</h4>
                            </div>
                        </div>
                    </li>
                    </>
                    )
                })}
                </ul>
            </div>

        </>
    );
}

export default NavBar;