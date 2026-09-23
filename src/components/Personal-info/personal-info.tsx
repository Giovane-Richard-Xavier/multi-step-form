import { TError, TFormData } from "@/types/form-data";
import { ChangeEvent } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

type Props = {
  formData: TFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  erros: TError;
};

export const PersonalInfo = ({
  formData,
  handleChange,
  onNext,
  erros,
}: Props) => {
  return (
    <div className="flex flex-col items-start text-[#0f0c33] py-10">
      <h1 className="text-3xl font-bold">Personal-info</h1>
      <p className="text-gray-400 mb-10 mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <section className="flex flex-col gap-6 w-full">
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={erros.name}
        />

        <Input
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          error={erros.email}
        />

        <Input
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          error={erros.phone}
        />

        <div className="flex items-center justify-end mt-10">
          <Button size="md" className="bg-[#0f0c33]" onClick={onNext}>
            Next Step
          </Button>
        </div>
      </section>
    </div>
  );
};
