"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Routes } from "../../../routes";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
  const router = useRouter();

  return (
    <Link
      href={`${Routes.SEARCH_PAGE}?q=${encodeURIComponent(label)}`}
      className="cursor-pointer group/item"
    >
      <div className="group-hover/item:underline font-medium">{label}</div>
      <div className="text-sm text-gray-400">{count} posts</div>
    </Link>
  );
};

export const TrendingItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="bg-gray-600 w-3/4 h-4"></div>
      <div className="bg-gray-600 w-1/4 h-4"></div>
    </div>
  );
};
