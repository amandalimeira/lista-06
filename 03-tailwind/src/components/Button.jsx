import React from "react";

const base =
  "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  solid:
    "bg-primary text-white hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-dark/80",
  outline:
    "border border-border text-primary bg-transparent hover:bg-bgSecondary dark:text-primary-dark dark:border-border-dark dark:hover:bg-bgSecondary-dark",
  ghost:
    "bg-transparent text-primary hover:bg-primary/10 dark:text-primary-dark dark:hover:bg-primary-dark/10",
};

export default function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
