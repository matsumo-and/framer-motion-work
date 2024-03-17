import { FC } from "react";
import { Member } from "../types/member";

const MemberCard: FC<Member> = ({
  id,
  firstName,
  firstKanaName,
  lastName,
  lastKanaName,
  imageName,
  age,
  introduce,
}: Member) => {
  const IMG_FOLDER: string = "/images/member/";
  const imgUrl: string = IMG_FOLDER + imageName;
  return (
    <div
      className={`
        mr-5
        `}
      id={id.toString()}
    >
      <img
        src={imgUrl}
        className="w-[200px] h-[300px] max-w-[200px] object-cover"
      ></img>

      <p>{firstName + lastName}</p>
    </div>
  );
};

export default MemberCard;
