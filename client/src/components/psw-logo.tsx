import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "small" | "large";
}

// Updated logo component using the actual image
export function PSWLogo({ className, variant = "small" }: LogoProps) {
  return (
    <div className={cn(
      "flex items-center",
      className
    )}>
      <div className={cn(
        "transition-opacity hover:opacity-90 flex items-center",
        variant === "small" ? "h-10" : "h-16",
      )}>
        {/* Quotation marks from actual image */}
        <img 
          src="/assets/quotes-logo.png" 
          alt="Quotation marks"
          className={cn(
            "object-contain",
            variant === "small" ? "h-8" : "h-14",
          )}
        />
        
        {/* Postscriptworks Text */}
        <span className={cn(
          "ml-2 font-bold text-[#101820]",
          variant === "small" ? "text-xl" : "text-3xl"
        )}>
          Postscriptworks
        </span>
      </div>
    </div>
  );
}
