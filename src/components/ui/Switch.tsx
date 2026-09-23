import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Label } from "./Label";

interface SwitchProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  label?: ReactNode;
  error?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      label,
      error,
      checked = false,
      onCheckedChange,
      className,
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button
            ref={ref}
            id={id}
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onCheckedChange?.(!checked)}
            className={`
                relative
                inline-flex
                h-6
                w-11
                shrink-0
                cursor-pointer
                rounded-full
                border    
                transition-colors
                focus:outline-none
                focus:ring-0
                focus:ring-offset-0 
                disabled:cursor-not-allowed 
                disabled:opacity-50

                ${checked ? "border-blue-600 bg-blue-600" : "border-zinc-300 bg-zinc-300"}

                ${className ?? ""}
            `}
            {...props}
          >
            <span
              className={`
                    pointer-events-none
                    block
                    size-5.5
                    rounded-full
                    bg-white
                    shadow
                    transition-transform
                    duration-200    
                    ${checked ? "translate-x-5" : "translate-x-0"}
                `}
            />
          </button>

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

Switch.displayName = "Switch";
