import React from "react";

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-appear">{children}</div>;
}
