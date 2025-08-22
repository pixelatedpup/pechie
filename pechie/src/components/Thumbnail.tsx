const Thumbnail = ({custom = ""}) => {
    return (    
        <div className={`${custom ? custom : "w-[396px] h-[282px]"} bg-white border boder-black`}>
            <img></img>
        </div>
    )
}

export default Thumbnail;