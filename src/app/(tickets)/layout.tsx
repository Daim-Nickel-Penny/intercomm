import React from "react";

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}