import type { PropsWithChildren } from "react";

interface DescriptionProps {
    custom?: string;
}

const Description = ({children, custom}: PropsWithChildren<DescriptionProps>) => {
    return (
        <div className={`bg-white rounded-xl ${custom?custom:"w-[650px] h-[280px]"}`}>
            {children}
        </div>
    );
};

export default Description;