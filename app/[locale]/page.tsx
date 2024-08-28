"use client";
import React, { useEffect } from "react";
import { Home } from "@/components/Home/Home";
import Notification from "@/components/Notification/Notification";

export default async function HomePage() {
  return (
    <section className="container rid items-center gap-6 pb-8 pt-6 md:py-10">
      <Home />
      <Notification />
    </section>
  );
}
