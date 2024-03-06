import { FC } from "react";

interface HeaderProps {
  opacity: number;
}

const Header: FC<HeaderProps> = ({ opacity }) => {
  return (
    <div
      className={`w-screen h-[100px] fixed
      flex items-center px-[50px]
      font-bold text-xl
      bg-gray-300 bg-opacity-${opacity}
      ease-in duration-500
      `}
    >
      framer-option-work
    </div>
  );
};

export default Header;
