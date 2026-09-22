"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./Button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`} className="">
          <img
            src={user.avatar}
            alt="Imagem do usuário"
            className="size-full"
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button
            size="sm"
            className="h-7 bg-white text-gray-700 hover:bg-gray-300"
            onClick={handleFollowButton}
          >
            Seguir
          </Button>
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 w-3/4 h-4"></div>
        <div className="bg-gray-600 w-1/4 h-4"></div>
      </div>
    </div>
  );
};
