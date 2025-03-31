import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
