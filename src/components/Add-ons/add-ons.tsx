import { Addons } from "@/types/add-ons";
import { HeadStep } from "../Head-form/head-step";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import { Card } from "../ui/card";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const AddOns = ({ onPrev, onNext }: Props) => {
  return (
    <div className="flexflex flex-col items-start text-[#0f0c33] py-10 max-w-lg w-full">
      <HeadStep
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <section className="flex flex-col gap-5 max-w-xl w-full px-1">
        {Addons.map((addon) => (
          <Card
            key={addon.id}
            className="flex items-center justify-between gap-2 border border-l-violet-200 p-3 rounded-lg"
          >
            <div className="flex items-center gap-8">
              <Checkbox />
              <div className="flex flex-col items-start">
                <h1 className="font-bold">{addon.name}</h1>
                <p className="text-gray-400">{addon.description}</p>
              </div>
            </div>
            <div>
              <span className="text-sm text-[#9f9af7] font-semibold">
                +${addon.monthlyPrice}/mo
              </span>
            </div>
          </Card>
        ))}

        <div className="flex-1 flex items-center justify-between mt-5 w-full">
          <Button
            variant="ghost"
            size="md"
            onClick={onPrev}
            className="font-bold"
          >
            Go Back
          </Button>
          <Button size="md" className="bg-[#0f0c33]" onClick={onNext}>
            Next Step
          </Button>
        </div>
      </section>
    </div>
  );
};
