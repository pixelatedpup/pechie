import { useState, useEffect} from "react";
import arrow from "../assets/arrow.png"

interface NavTopProps {
    works: { name: string }[]; // should match your works array type
    activeWorkName: string;
    onSelect: (name: string) => void; // add this!
    useIndex?: number;
}
 const [activeIndex, setActiveIndex] = useState(0)
const NavTop = ({ works, activeWorkName, onSelect, useIndex=0 }: NavTopProps) => {

        useEffect(()=>{
            console.log(activeIndex);
    },[activeIndex])

    const handleNext = () => {
            {activeIndex < works.length - 1 ?
                setActiveIndex((prev) => (prev+1))
                :setActiveIndex(0)

            }
            onSelect(works[activeIndex].name)
            }
    return (
        <div className="flex flex-row gap-5 justify-center">

                <div 

                onClick={handleNext}
                className="flex items-center cursor-pointer">
                    <img src={arrow} className="scale-x-[-1]"/>
                </div>
                <div className="flex items-center">
                    <h1>{works[activeIndex].name}</h1>
                </div>
                <div 
                onClick={handleNext}
                className="flex items-center cursor-pointer">
                    <img src={arrow} />
                </div>
            
        </div>
    );
};

export default NavTop;
