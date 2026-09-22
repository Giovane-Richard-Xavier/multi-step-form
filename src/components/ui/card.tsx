import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-white ronded-lg border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  ),
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  ),
);

CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 text-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  ),
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  ),
);

CardFooter.displayName = "CardFooter";

export const CardTitle = forwardRef<HTMLHeadingElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`mt-1 text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </h3>
  ),
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={`mt-1 text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </p>
  ),
);

CardDescription.displayName = "CardDescription";

export const CardAction = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={`ml-auto ${className}`} {...props}>
      {children}
    </div>
  ),
);

CardAction.displayName = "CardAction";
