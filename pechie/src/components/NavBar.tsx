import { useState } from "react";

type Work = {
    name:string
}

type NavBarProps = {
    works?: Work[];
    activeWorkName?: string;
}



const NavBar = ({works=[], activeWorkName}:NavBarProps) =>{
    const [active, setActive] = useState("")

    const handleActive = (item:string) =>{
        setActive(item)
    }
    return(

        <>
            <div className="flex flex-col">
                <ul>
                {works.map((work) => {
                    const isActive = work.name === active;
                    return(
                        <>
                    <li>
                        <div onClick={() => {handleActive(work.name)}} className="flex flex-row ">
                            <div className="w-[33px] h-[33px]"></div>
                            <div className={isActive? `w-[239px] h-[31px] text-black  bg-[var(--white)] hover:text-black  hover:bg-white border border-var[(--dark)]]` 
                                                        :
                                                      `w-[239px] h-[31px] text-white  bg-[var(--dark)] hover:text-white  hover:bg-[var(--primary)] border border-var[(--dark)]]`}>
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