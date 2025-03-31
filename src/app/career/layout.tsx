import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
