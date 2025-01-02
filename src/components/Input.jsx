import React from "react";
import cn from "classnames";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "bg-primary-light border-transparent text-gray-300 text-sm rounded-lg focus:ring focus:ring-primary/40 focus:border-primary block p-3 placeholder:text-gray-400 focus:border-primary/60",
        className
      )}
      {...props}
    />
  );
}
