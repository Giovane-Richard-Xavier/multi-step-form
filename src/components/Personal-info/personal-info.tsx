import { TFormData } from "@/types/form-data";
import { ChangeEvent } from "react";

type Props = {
  formData: TFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PersonalInfo = ({ formData, handleChange }: Props) => {
  return (
    <div>
      <h1>Personal-info</h1>
      <p>Please provide your name, address, and phone number.</p>

      <section>
        <input name="name" value={formData.name} onChange={handleChange} />

        <input name="email" value={formData.name} onChange={handleChange} />

        <input name="phone" value={formData.name} onChange={handleChange} />
      </section>
    </div>
  );
};
