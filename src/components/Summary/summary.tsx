import { TFormData } from "@/types/form-data";
import { HeadStep } from "../Head-form/head-step";
import { Button } from "../ui/Button";
import { Accordion } from "../ui/Accordion";
import { AccordionTrigger } from "../ui/AccordionTregger";
import { AccordionContent } from "../../context/AccordionContent";
import { AccordionItem } from "../ui/AccordionItem";

type Props = {
  formData: TFormData;
  onPrev: () => void;
  onNext: () => void;
};

export const Summary = ({ formData, onNext, onPrev }: Props) => {
  return (
    <div className="flexflex flex-col items-start text-[#0f0c33] py-10 max-w-lg w-full">
      <HeadStep
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <section className="flex flex-col gap-5 max-w-xl w-full px-1">
        <div className="flex-1 flex  flex-col items-center justify-between gap-10 mt-5 w-full">
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>O que é o Município Digital?</AccordionTrigger>

              <AccordionContent>
                O Município Digital é uma plataforma SaaS desenvolvida para
                prefeituras e câmaras municipais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quais tecnologias são utilizadas?
              </AccordionTrigger>

              <AccordionContent>
                A aplicação utiliza Next.js, React, NestJS, TypeScript e
                PostgreSQL.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                O sistema possui suporte multi-tenant?
              </AccordionTrigger>

              <AccordionContent>
                Sim. Cada prefeitura possui seu próprio tenant, configurações,
                menus, páginas e conteúdos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              size="md"
              onClick={onPrev}
              className="font-bold"
            >
              Go Back
            </Button>
            <Button size="md" className="bg-[#483eff]">
              Confirm
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
