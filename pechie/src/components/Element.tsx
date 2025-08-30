interface ElementProps{
    text?:string;
    image?:string;

}

const Element = ({text="", image}:ElementProps) =>{
    return(
        <>
            <div className="flex flex-col items-center h-auto">
                <img 
                src={image}
                alt={text}
                className="w-[48px] h-[48px]"></img>
                <h5 className="text-[var(--primary)]">{text}</h5>
            </div>
        </>
    )
}

export default Element;