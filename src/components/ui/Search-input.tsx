"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Routes } from "../../../routes";
import { Input } from "./Input";

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const [searchInput, setSearchInput] = useState(defaultValue ?? "");

  const handleSearchEnter = () => {
    if (searchInput) {
      router.push(`${Routes.SEARCH_PAGE}?q=${encodeURIComponent(searchInput)}`);
    }
  };

  if (hideOnSearch && pathName === "/search") return null;

  return (
    <Input
      placeholder="Buscar..."
      leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="bg-gray-700"
      onEnter={handleSearchEnter}
    />
  );
};
