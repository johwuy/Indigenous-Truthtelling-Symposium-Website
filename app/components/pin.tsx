import React from "react";

interface PinProps extends React.HTMLAttributes<HTMLDivElement>  {
  children: React.ReactNode;
  color: string;
  shift?: "left" | "right";
}

function Pin({ children, color, shift = "left", className = "", ...rest } : PinProps) {
  const isRight = shift == "right";
  const shiftClass = isRight ? "-translate-x-4" : "translate-x-4";
  const textMarginClass = isRight ? "mr-11" : "mr-19";

  return (
    <div className={`h-auto w-xl aspect-square relative ${className}`} {...rest}>
      <div className="bg-white h-full rounded-full flex justify-center items-center"></div>
      <div className={`w-full h-full rounded-full absolute inset-0 ${shiftClass} flex items-center`} style={{
          backgroundColor: `color-mix(in oklab, ${color} 60%, transparent)`
        }}>
        <p className={`text-black text-center m-15 ${textMarginClass} text-2xl/relaxed`}>{children}</p>
      </div>
    </div>
  );
}

export default Pin;