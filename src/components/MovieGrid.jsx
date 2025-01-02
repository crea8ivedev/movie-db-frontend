import React from "react";
import cn from "classnames";

export default function MovieGrid({ className, children, ...props }) {
  return (
    <div className={cn("grid grid-cols-4 gap-8", className)} {...props}>
      {children}
    </div>
  );
}
