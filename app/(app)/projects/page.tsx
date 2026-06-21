import React from "react";
import Header from "@/components/Header";
import AllProject from "./projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the latest web applications and software projects built by Manav Valani.",
};


export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full max-w-3xl mx-auto px-6 sm:px-16 pb-24 z-10">
        <AllProject />
      </main>
    </div>
  );
}
