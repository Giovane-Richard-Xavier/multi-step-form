import { ReactNode } from "react";

interface AccordionItemProps {
  value: string;
  childrean: ReactNode;
}

export const AccordionItem = ({ value, childrean }: AccordionItemProps) => {
  return (
    <div data-accordion-value={value} className="border-b">
      {childrean}
    </div>
  );
};
