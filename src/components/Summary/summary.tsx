import { TFormData } from "@/types/form-data";
import { HeadStep } from "../Head-form/head-step";
import { Button } from "../ui/Button";

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
        <div className="flex-1 flex items-center justify-between mt-5 w-full">
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
      </section>
    </div>
  );
};
