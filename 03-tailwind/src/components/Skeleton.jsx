import React from "react";

export default function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse bg-skeleton rounded ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}
