import { FC } from "react";

interface HeaderProps {
  opacity: number;
}

const Header: FC<HeaderProps> = ({ opacity }) => {
  return (
    <div
      className={`w-screen h-[100px] fixed
      flex items-center px-[50px]
      font-bold text-xl text-gray-900
      ${opacity ? "bg-gray-300 bg-opacity-" + opacity : "bg-transparent"}

      ease-in duration-500
      `}
    >
      framer-motion-work
    </div>
  );
};

export default Header;
