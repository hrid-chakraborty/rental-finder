'use client';

import { User } from "@prisma/client";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string
  currentUser?: User | null
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser
  });

  return (
    <div 
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineLike
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillLike
        size={24}
        className={
          hasFavorited ? 'fill-blue-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
}
 
export default HeartButton;