"use client";

import { ChangeEvent, useState } from "react";
import { PersonalInfo } from "../Personal-info/personal-info";
import { SelectPlan } from "../Select-plan/select-plan";
import { AddOns } from "../Add-ons/add-ons";
import { Summary } from "../Summary/summary";
import { TFormData } from "@/types/form-data";
import { Card } from "../ui/card";

export const MultStep = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const size = 4;

  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "",
    addons: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nexStep = () => {
    setCurrentStep((current) => (current + 1 - size) % size);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="flex gap-20 px-6 py-6 w-4xl border-none rounded-2xl shadow-xl!">
        <Card className="flex-1 max-w-xs p-20 w-xs rounded-2xl">Sidebar</Card>

        {currentStep === 1 && (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            onNext={nexStep}
          />
        )}

        {currentStep === 2 && <SelectPlan />}
        {currentStep === 3 && <AddOns />}
        {currentStep === 4 && <Summary />}
      </Card>
    </div>
  );
};
