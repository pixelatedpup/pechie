interface ThumbnailProps {
  custom?: string;
  src?: string;
  alt?: string;
  autoPlay?: boolean;
}

const Thumbnail = ({
  custom = "",
  src,
  alt = "thumbnail",
  autoPlay = false,
}: ThumbnailProps) => {
  return (
    <div
      className={`${
        custom ? custom : "lg:w-[396px] lg:h-[282px] w-[283.85px] h-[201.428571px]"
      } bg-white border border-black`}
    >
        {/* Study the spread operator more*/}
      <video
        {...(autoPlay && { autoPlay: true, loop: true, muted: true, playsInline: true })}
        src={src}
        typeof={"video/mov"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Thumbnail;