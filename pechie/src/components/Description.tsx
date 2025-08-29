import type { PropsWithChildren } from "react";

interface DescriptionProps {
    custom?: string;
}

const Description = ({children, custom}: PropsWithChildren<DescriptionProps>) => {
    return (
        <div className={`bg-white rounded-xl ${custom?custom:"lg:w-[650px] h-auto w-auto"}`}>
            {children}
        </div>
    );
};

export default Description;