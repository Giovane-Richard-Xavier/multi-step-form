import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            id={id}
            type="radio"
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`
              size-4  
              cursor-pointer
              border-zinc-700
              accent-blue-600
              disabled:cursor-not-allowed
              disabled:opacity-50

              ${className ?? ""}
            `}
            {...props}
          />

          {label && (
            <Label htmlFor={id} className="cursor-pointer">
              {label}
            </Label>
          )}
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

RadioButton.displayName = "RadioButton";
