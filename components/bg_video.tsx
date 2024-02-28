import { FC } from "react";

const BgVideo: FC = () => {
  return (
    <>
      <video
        id="top-bg-video"
        className="h-screen fixed -z-10 object-cover overflow-hidden ease-in duration-100"
        height={"120%"}
        width={"120%"}
        src={require("../public/movie/bg.mp4")}
        webkit-playsinline="true"
        playsInline
        muted
        autoPlay
        loop
      ></video>

      <div
        id="top-bg-video-spacer"
        className="w-screen h-screen bg-tranceparent"
      ></div>
    </>
  );
};

export default BgVideo;
