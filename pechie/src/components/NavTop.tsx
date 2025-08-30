import { useState, useEffect } from "react";
import arrow from "../assets/arrow.png";

interface NavTopProps {
  works: { name: string }[];
  activeWorkName: string;
  onSelect: (name: string) => void;
  useIndex?: number;
}

const NavTop = ({ works, onSelect, useIndex = 0 }: NavTopProps) => {
  const [activeIndex, setActiveIndex] = useState(useIndex);

  // keep Works.tsx in sync whenever activeIndex changes
  useEffect(() => {
    onSelect(works[activeIndex].name);
  }, [activeIndex, works, onSelect]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < works.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : works.length - 1));
  };

  return (
    <div className="flex flex-col">
        <div className="flex flex-row gap-5 justify-center">
        {/* Prev Button */}
            <div onClick={handlePrev} className="flex items-center cursor-pointer">
                <img src={arrow} className="scale-x-[-1]" />
            </div>

            {/* Active work name */}
            <div className="flex items-center">
                <h3 className="text-[24px] font-bold">{works[activeIndex].name}</h3>
            </div>

            {/* Next Button */}
            <div onClick={handleNext} className="flex items-center cursor-pointer">
                <img src={arrow} />
            </div>
        </div>

        <h4 className="flex justify-center text-[var(--primary)]">
            {`${activeIndex + 1}/${works.length}`}
        </h4>
    </div>
  );
};

export default NavTop;
