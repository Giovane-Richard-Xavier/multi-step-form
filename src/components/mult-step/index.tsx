"use client";

import { ChangeEvent, useState } from "react";
import { PersonalInfo } from "../Personal-info/personal-info";
import { SelectPlan } from "../Select-plan/select-plan";
import { AddOns } from "../Add-ons/add-ons";
import { Summary } from "../Summary/summary";
import { TError, TFormData } from "@/types/form-data";
import { Card } from "../ui/card";

export const MultStep = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const TOTAL_STEPS = 4;

  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "",
    addons: [],
  });

  const [erros, setErrors] = useState<TError>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePlanChange = (plan: string) => {
    setFormData((prev) => ({
      ...prev,
      plan,
    }));
  };

  const handleBillingChange = (billing: string) => {
    setFormData((prev) => ({
      ...prev,
      billing,
    }));
  };

  const validatePersonalInfo = () => {
    // descobrir quais campos estão inválidos
    const newErros = {
      name: "",
      email: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErros.name = "This field is required";
    }

    if (!formData.email.trim()) {
      newErros.email = "This field is required";
    }

    if (!formData.phone.trim()) {
      newErros.phone = "This field is required";
    }

    // atualizar erros
    setErrors(newErros);

    // retornar true ou false
    return !newErros.name && !newErros.email && !newErros.phone;
  };

  const nextStep = () => {
    if (currentStep === 1) {
      const isValid = validatePersonalInfo();

      if (!isValid) return;
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="flex gap-16 p-6 w-4xl border-none rounded-2xl shadow-xl!">
        <Card
          className={`flex-1 max-w-64 p-20 rounded-2xl bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-center bg-no-repeat bg-cover`}
        >
          Sidebar
        </Card>

        {currentStep === 1 && (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            onNext={nextStep}
            erros={erros}
          />
        )}

        {currentStep === 2 && (
          <SelectPlan
            formData={formData}
            onPlanChange={handlePlanChange}
            handleBillingChange={handleBillingChange}
            onPrev={previousStep}
            onNext={nextStep}
          />
        )}
        {currentStep === 3 && (
          <AddOns onPrev={previousStep} onNext={nextStep} />
        )}

        {currentStep === 4 && <Summary />}
      </Card>
    </div>
  );
};
