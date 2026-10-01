import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";
import { useAccordion } from "./Accordion";
import { IconChevronDown } from "@tabler/icons-react";

interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

export const AccordionTrigger = ({
  value,
  children,
  className = "",
  ...props
}: AccordionTriggerProps) => {
  const { activeItem, toggleItem } = useAccordion();

  const isOpen = activeItem === value;

  return (
    <Button
      type="button"
      aria-expanded={isOpen}
      onClick={() => toggleItem(value)}
      className={`
        flex
        w-full
        items-center
        justify-between
        py-4
        text-left
        font-medium
        transition-all
        hover:underline
        ${className}
    `}
      {...props}
    >
      <span>{children}</span>

      <IconChevronDown
        size={18}
        className={`
          shrink-0
          transition-transform
          duration-200
          ${isOpen ? "rotate-180" : ""}
        `}
      />
    </Button>
  );
};
