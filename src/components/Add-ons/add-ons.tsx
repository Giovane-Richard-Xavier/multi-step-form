import { Addons } from "@/types/add-ons";
import { TFormData } from "@/types/form-data";
import { HeadStep } from "../Head-form/head-step";
import { Button } from "../ui/Button";

type Props = {
  formData: TFormData;
  handleAddonChange: (addonId: string) => void;
  onPrev: () => void;
  onNext: () => void;
};

export const AddOns = ({
  formData,
  handleAddonChange,
  onPrev,
  onNext,
}: Props) => {
  return (
    <div className="flexflex flex-col items-start text-[#0f0c33] py-10 max-w-lg w-full">
      <HeadStep
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <section className="flex flex-col gap-5 max-w-xl w-full px-1">
        {Addons.map((addon) => {
          const isSelected = formData.addons.includes(addon.id);

          return (
            <button
              key={addon.id}
              onClick={() => handleAddonChange(addon.id)}
              className={`flex items-center justify-between gap-2 border p-3 rounded-lg cursor-pointer
              ${isSelected ? "border-[#473dff] bg-[#f8f7ff]" : "border-gray-300"}  
            `}
            >
              <div className="flex items-center gap-8">
                <div
                  className={`flex size-5 items-center justify-center rounded border
                    ${isSelected ? "border-[#473dff] bg-[#473dff]" : "border-gray-300"}
                  `}
                >
                  {isSelected && <span className="text-xs text-white">✓</span>}
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="font-bold">{addon.name}</h1>
                  <p className="text-gray-400">{addon.description}</p>
                </div>
              </div>
              <div>
                <span className="text-sm text-[#9f9af7] font-semibold">
                  +$
                  {formData.billing === "yearly"
                    ? addon.yearlyPrice
                    : addon.monthlyPrice}
                  /{formData.billing === "yearly" ? "yr" : "mo"}
                </span>
              </div>
            </button>
          );
        })}

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
