interface ElementProps{
    text?:string;
    image?:string;

}

const Element = ({text=""}) =>{
    return(
        <>
            <div className="h-[70px]">
                <img className="w-[48px] h-[48px]"></img>
                <h5>{text}</h5>
            </div>
        </>
    )
}

export default Element;