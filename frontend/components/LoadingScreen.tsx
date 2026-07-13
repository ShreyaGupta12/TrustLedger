"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";

const steps = [
  "Connecting to GST Network...",
  "Reading UPI Transactions...",
  "Fetching Account Aggregator Data...",
  "Analyzing EPFO Records...",
  "Running TrustFusion™ AI Engine...",
  "Generating Trust Quotient...",
];

export default function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <Card className="w-full max-w-2xl bg-slate-900 border-slate-700 p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          TrustLedger AI Assessment
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Evaluating MSME financial health using alternate data sources...
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3"
            >
              <span className="text-slate-200">{step}</span>

              {index < currentStep ? (
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              ) : index === currentStep ? (
                <Loader2 className="h-5 w-5 text-cyan-400 animate-spin" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-slate-600" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="h-3 overflow-hidden rounded-full bg-slate-700">
            <motion.div
              className="h-full bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5 }}
            />
          </div>

          <p className="mt-4 text-center text-slate-400">
            Processing financial signals...
          </p>
        </div>
      </Card>
    </main>
  );
}