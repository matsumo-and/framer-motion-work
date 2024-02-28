import { FC } from "react";
import Header from "./header";

const BgVideo: FC = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 z-0 object-cover overflow-hidden">
      <Header />
      <video
        height={"100%"}
        width={"100%"}
        src={require("../public/movie/bg.mp4")}
        webkit-playsinline="true"
        playsInline
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default BgVideo;
