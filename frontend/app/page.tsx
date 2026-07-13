"use client";

import { useState } from "react";

import Landing from "@/components/Landing";
import LoadingScreen from "@/components/LoadingScreen";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [stage, setStage] = useState<
    "landing" | "loading" | "dashboard"
  >("landing");

  const startAssessment = () => {
    setStage("loading");

    setTimeout(() => {
      setStage("dashboard");
    }, 3500);
  };

  return (
    <>
      {stage === "landing" && (
        <Landing onStart={startAssessment} />
      )}

      {stage === "loading" && (
        <LoadingScreen />
      )}

      {stage === "dashboard" && (
        <Dashboard />
      )}
    </>
  );
}