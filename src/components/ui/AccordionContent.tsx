import { ReactNode } from "react";
import { useAccordion } from "./Accordion";

interface AccordionContentProps {
  value: string;
  children: ReactNode;
}

export const AccordionContent = ({
  value,
  children,
}: AccordionContentProps) => {
  const { activeItem } = useAccordion();

  const isOpen = activeItem === value;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overflow-hidden pb-4 text-sm text-muted-foreground">
      {children}
    </div>
  );
};
