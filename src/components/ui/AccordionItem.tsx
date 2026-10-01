import { createContext, ReactNode, useContext } from "react";

interface AccordionItemContextData {
  value: string;
}

const AccordionItemContext = createContext<
  AccordionItemContextData | undefined
>(undefined);

interface AccordionItemProps {
  value: string;
  children: ReactNode;
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className="border-b border-gray-200 py-2">{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error("useAccordionItem must be used within an AccordionItem");
  }

  return context;
}
