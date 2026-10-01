import { ReactNode } from "react";
import { useAccordion } from "../components/ui/Accordion";
import { useAccordionItem } from "@/components/ui/AccordionItem";

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { activeItem } = useAccordion();
  const { value } = useAccordionItem();

  const isOpen = activeItem === value;

  return (
    <div
      className={`
      grid
      transition-all
      duration-200
      ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
    `}
    >
      <div className="overflow-hidden">
        <div className="overflow-hidden p-4 text-sm text-muted-foreground text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
};
