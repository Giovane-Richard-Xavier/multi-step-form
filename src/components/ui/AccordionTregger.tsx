import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";
import { useAccordion } from "./Accordion";
import { IconChevronDown } from "@tabler/icons-react";
import { useAccordionItem } from "./AccordionItem";

interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const AccordionTrigger = ({
  children,
  className = "",
  ...props
}: AccordionTriggerProps) => {
  const { activeItem, toggleItem } = useAccordion();
  const { value } = useAccordionItem();

  const isOpen = activeItem === value;

  return (
    <Button
      type="button"
      aria-expanded={isOpen}
      onClick={() => toggleItem(value)}
      variant="ghost"
      className={`
        flex
        w-full
        h-14
        items-center
        justify-between
        py-4
        text-left
        font-medium
        transition-all
        bg-gray-100
        hover:bg-gray-200
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
