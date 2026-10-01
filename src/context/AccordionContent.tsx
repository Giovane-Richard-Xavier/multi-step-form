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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overflow-hidden p-4 text-sm text-muted-foreground text-gray-500">
      {children}
    </div>
  );
};
