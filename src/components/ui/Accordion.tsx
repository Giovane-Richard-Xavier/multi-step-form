import { createContext, ReactNode, useContext, useState } from "react";

interface AccordionContextData {
  activeItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextData | undefined>(
  undefined,
);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setActiveItem((current) => (current === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

export function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion deve ser usado dentro de um Accordion");
  }

  return context;
}
