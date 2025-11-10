import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  dotColor?: string;
  bgColor?: string;
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
}

export function DotPattern({
  className,
  dotColor = "white",
  bgColor = "#1E4C52",
  rows = 8,
  cols = 8,
  dotSize = 8,
  gap = 20,
}: DotPatternProps) {
  const dots = [];
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          className="rounded-full"
          style={{
            backgroundColor: dotColor,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            margin: `${gap / 2}px`,
          }}
        />
      );
    }
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor: bgColor }}
    >
      <div 
        className="flex flex-wrap justify-start"
        style={{ 
          width: `${cols * (dotSize + gap)}px`,
        }}
      >
        {dots}
      </div>
      
      {/* Yellow circle overlay */}
      <div 
        className="absolute bottom-0 right-0 rounded-tl-full bg-[#F0D197]"
        style={{ 
          width: '50%', 
          height: '50%',
          zIndex: 2 
        }}
      />
    </div>
  );
}