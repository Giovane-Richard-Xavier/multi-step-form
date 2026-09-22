import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={`
              size-4
              cursor-pointer
              rounded
              border
              border-zinc-700
              accent-blue-600
              transition-colors

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

Checkbox.displayName = "Checkbox";
