const Thumbnail = ({custom = ""}) => {
    return (    
        <div className={`${custom ? custom : "lg:w-[396px] lg:h-[282px] w-[283.85px] h-[201.428571px] "} bg-white border boder-black `}>
            <img></img>
        </div>
    )
}

export default Thumbnail;