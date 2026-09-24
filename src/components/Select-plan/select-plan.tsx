import { TFormData } from "@/types/form-data";
import { plans } from "@/types/select-plans";
import { Button } from "../ui/Button";
import { Switch } from "../ui/Switch";
import { useState } from "react";
import { HeadStep } from "../Head-form/head-step";

type Props = {
  formData: TFormData;
  onPrev: () => void;
  onNext: () => void;
  onPlanChange: (plan: string) => void;
  handleBillingChange: (billing: string) => void;
};

export const SelectPlan = ({
  formData,
  onPrev,
  onNext,
  onPlanChange,
  handleBillingChange,
}: Props) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-col items-start text-[#0f0c33] py-10 max-w-lg">
      <HeadStep
        title="Select your plan"
        description="You have the option of mnthly or yearly billing."
      />

      <section className="flex flex-col gap-10 max-w-xl">
        <div className="flex gap-6 w-full">
          {plans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => onPlanChange(plan.id)}
              className={`flex flex-col border rounded-lg px-4 py-6 flex-1 cursor-pointer w-36 h-44 hover:border-[#0f0c33] ${
                formData.plan === plan.id
                  ? "border-[#0f0c33] bg-[#f8f7ff]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="size-30">
                <img src={`/assets/images/${plan.icon}`} alt="" />
              </div>

              <div className="flex flex-col items-start gap-1">
                <span className="font-bold">{plan.name}</span>

                <span className="text-gray-300 text-sm">
                  $
                  {formData.billing === "yearly"
                    ? plan.yearlyPrice
                    : plan.montlyPrice}
                  /{formData.billing === "yearly" ? "yr" : "mo"}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 h-10 bg-[#f8f7ff] rounded-md">
          <span>Monthly</span>
          <Switch
            id="notifications"
            checked={enabled}
            onCheckedChange={setEnabled}
            className="border-[#0f0c33]! bg-[#0f0c33]!"
          />
          <span>Yearly</span>
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
