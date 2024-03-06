import { FC } from "react";

interface bgVideoInterface {
  blur: boolean;
}

/**
 * TOP画面に表示される動画背景
 *
 * @param bgVideoInterface
 * @returns
 */
const BgVideo: FC<bgVideoInterface> = ({ blur }) => {
  return (
    <div
      className={`w-screen h-screen fixed -z-10 overflow-hidden ease-in duration-500 ${
        blur && "blur-sm"
      }`}
      style={{
        width: "125vw",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <video
        id="top-bg-video"
        className={`w-full h-full object-cover overflow-hidden`}
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
