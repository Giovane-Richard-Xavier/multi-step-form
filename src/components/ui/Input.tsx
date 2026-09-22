import { IconEye, IconEyeOff } from "@tabler/icons-react";

import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
  KeyboardEvent,
} from "react";

import { Label } from "./Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string | ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  showPasswordToggle?: boolean;
  onEnter?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className,
      id,
      leftIcon,
      rightIcon,
      onRightIconClick,
      showPasswordToggle = false,
      type = "text",
      onEnter,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType = isPassword && showPassword ? "text" : type;

    const icon =
      isPassword && showPasswordToggle ? (
        showPassword ? (
          <IconEye size={18} />
        ) : (
          <IconEyeOff size={18} />
        )
      ) : (
        rightIcon
      );

    const handleIconClick = () => {
      if (isPassword && showPasswordToggle) {
        setShowPassword((current) => !current);
        return;
      }

      onRightIconClick?.();
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.code.toLocaleLowerCase() === "enter" && onEnter) {
        onEnter?.();
      }
    };

    return (
      <div className="flex flex-col gap-1">
        {label && <Label htmlFor={id}>{label}</Label>}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={inputType}
            className={`
              h-10
              w-full
              rounded-md
              border
              px-3
              ${leftIcon ? "pl-10" : ""}
              ${icon ? "pr-10" : ""}
              text-sm
              outline-none
              transition-colors
              placeholder-zinc-500
              focus:border-white
              disabled:cursor-not-allowed
              disabled:opacity-50
              read-only:opacity-50
              ${error ? "border-red-500" : "border-zinc-700"}
              ${className ?? ""}
            `}
            onKeyUp={handleKeyUp}
            {...props}
          />

          {leftIcon && (
            <div className=" pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 ">
              {" "}
              {leftIcon}{" "}
            </div>
          )}

          {icon && (
            <button
              type="button"
              onClick={handleIconClick}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-zinc-500
                transition-colors
                hover:text-zinc-300
              "
              aria-label={
                isPassword
                  ? showPassword
                    ? "Ocultar senha"
                    : "Mostrar senha"
                  : undefined
              }
            >
              {icon}
            </button>
          )}
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
