import { cn } from "cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",

      secondary: "bg-zinc-700 text-white hover:bg-zinc-700",

      outline: "border border-zinc-600 bg-transparent hover:bg-zinc-900",

      ghost: "",

      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",

      icon: "size-10 text-md",

      md: "h-11 px-4",

      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={loading || disabled}
        className={cn(
          "rounded-md transition font-medium",
          "disabled:opacity-50",
          "disabled:pointer-events-none",
          "cursor-pointer",

          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {loading ? "Carregando..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
