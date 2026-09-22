import { forwardRef, ReactNode, TextareaHTMLAttributes } from "react";
import { Label } from "./Label";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className, id, ...props }, ref) => (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}

      <textarea
        ref={ref}
        id={id}
        className={`
          min-h-24
          w-full
          resize-y
          rounded-md
          border
          px-3
          py-2
          text-sm
          outline-none
          transition-colors

        placeholder:text-zinc-500

        focus:border-blue-500

          disabled:cursor-not-allowed
          disabled:opacity-50
          read-only:cursor-not-allowed
          read-only:opacity-50

          ${error ? "border-red-500 focus:border-red-500" : "border-zinc-700"}

          ${className ?? ""}
      `}
        {...props}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  ),
);

TextArea.displayName = "TextArea";
