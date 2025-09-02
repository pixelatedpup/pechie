import Content from "../Content";
import NavBar from "../NavBar";
import NavTop from "../NavTop";
import { works } from "../../assets/AllWorks";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery"; // <- new hook

const Works = () => {
    const [activeWork, setActiveWork] = useState(works[0]);
    const isMobileOrTablet = useMediaQuery("(max-width: 1024px)"); // lg breakpoint in Tailwind

    const handleSelect = (name: string) => {
        const selected = works.find((w) => w.name === name);
        if (selected) setActiveWork(selected);
    };

    return (
        <div className={`flex ${isMobileOrTablet ? "flex-col" : "flex-row"} justify-center w-full gap-5`}>
            {isMobileOrTablet ? (
                <NavTop
                    works={works}
                    activeWorkName={activeWork.name}
                    onSelect={handleSelect}
                />
            ) : (
                <NavBar
                    works={works}
                    activeWorkName={activeWork.name}
                    onSelect={handleSelect}
                />
            )}

            <Content
                title={activeWork.name}
                github={activeWork.github}
                figma={activeWork.figma}
                deploy={activeWork.deploy}
                tags={activeWork.tags}
                description={activeWork.description}
                videos = {activeWork.videos}
            />
        </div>
    );
};

export default Works;
