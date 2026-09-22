import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  path: string;
};

export const GeneralHeader = ({ children, path }: Props) => {
  return (
    <header className="flex items-center gap-4 p-6 mx-8 md:mx-0">
      <Link
        href={path}
        className="flex items-center justify-center border-2 border-gray-500 size-12 rounded-full"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
      </Link>

      <div className="flex-1">{children}</div>
    </header>
  );
};
