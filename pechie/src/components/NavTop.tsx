interface NavTopProps {
    works: { name: string }[]; // should match your works array type
    activeWorkName: string;
    onSelect: (name: string) => void; // add this!
}

const NavTop = ({ works, activeWorkName, onSelect }: NavTopProps) => {

    
    const handleNext = () => {

        }
    return (
        <div className="flex flex-row gap-5 flex-wrap">
            {works.map((work) => (
                <button
                    key={work.name}
                    className={`px-4 py-2 rounded ${
                        work.name === activeWorkName ? "bg-gray-800 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => onSelect(work.name)}
                >
                    {work.name}
                </button>
            ))}
        </div>
    );
};

export default NavTop;

// const NavTop = ({works, activeWorkName}:NavTopProps) => {
//     return(
//         <div className="flex flex-row gap-5">
//             <div className=""> Prev </div>
//             <div className=""> Works </div>
//             <div className=""> Nav </div>
//         </div>
//     );
// }

// export default NavTop