"use client";

import { ChangeEvent, useState } from "react";
import { PersonalInfo } from "../Personal-info/personal-info";
import { SelectPlan } from "../Select-plan/select-plan";
import { AddOns } from "../Add-ons/add-ons";
import { Summary } from "../Summary/summary";
import { TFormData } from "@/types/form-data";

export const MultStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

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

  return (
    <div>
      {currentStep === 1 && (
        <PersonalInfo formData={formData} handleChange={handleChange} />
      )}
      {currentStep === 2 && <SelectPlan />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}

      <section>
        <input name="name" value={formData.name} onChange={handleChange} />

        <h1>{formData.name}</h1>
      </section>
    </div>
  );
};
