interface ThumbnailProps {
  custom?: string;
  src?: string;
  alt?: string;
  autoPlay?: boolean;
}

const Thumbnail = ({ custom = "", src = "", autoPlay = false }: ThumbnailProps) => {
  if (!src) {
    return (
      <div
        className={`${
          custom ? custom : "lg:w-[396px] lg:h-[282px] w-[283.85px] h-[201.428571px]"
        } flex items-center justify-center bg-gray-800 text-white`}
      >
        No video available
      </div>
    );
  }

  const isDriveVideo = src.includes("drive.google.com");

  return (
    <div
      className={`${
        custom
          ? custom
          : "lg:w-[396px] lg:h-[282px] w-[283.85px] h-[201.428571px]"
      } bg-white border border-black`}
    >
      {isDriveVideo ? (
        <iframe
          src={
            src.includes("/preview")
              ? src
              : src.replace("/view?usp=sharing", "/preview")
          }
          className="w-full h-full object-cover"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          {...(autoPlay && {
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
          })}
          src={src}
          typeof={"video/mp4"}
          className="w-full h-full object-cover"
          controls
        />
      )}
    </div>
  );
};

export default Thumbnail;
