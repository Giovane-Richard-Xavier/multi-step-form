import { HeadStep } from "../Head-form/head-step";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const AddOns = ({ onPrev, onNext }: Props) => {
  return (
    <div className="flex flex-col items-start text-[#0f0c33] py-10 max-w-lg bg-amber-200">
      <HeadStep
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <section className="flex flex-col gap-10 max-w-xl w-full">
        <div className="">
          <Checkbox />
          <div>
            <h1>Online Service</h1>
            <p>Access to multiplayer games</p>
          </div>
          <div></div>
        </div>

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
