"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ShieldCheck,
  Landmark,
  Wallet,
  Briefcase,
  Building2,
  BadgeCheck,
} from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

const sources = [
  {
    name: "GST",
    icon: Landmark,
  },
  {
    name: "UPI",
    icon: Wallet,
  },
  {
    name: "Account Aggregator",
    icon: ShieldCheck,
  },
  {
    name: "EPFO",
    icon: Briefcase,
  },
  {
    name: "OCEN",
    icon: Building2,
  },
  {
    name: "ULI",
    icon: BadgeCheck,
  },
];

export default function Landing({ onStart }: LandingProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h1 className="text-6xl font-extrabold tracking-tight">
            TrustLedger
          </h1>

          <p className="mt-6 text-2xl font-semibold text-cyan-400">
            AI-powered MSME Financial Health Card
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
            Empowering credit inclusion using alternate financial data from
            GST, UPI, Account Aggregator, EPFO, OCEN and ULI ecosystems.
            TrustLedger generates an explainable Trust Quotient that enables
            faster, fairer and smarter lending decisions.
          </p>

          <Button
            onClick={onStart}
            className="mt-10 text-lg px-8 py-7 rounded-xl"
          >
            Run AI Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

        </motion.div>

        <div className="mt-20">

          <h2 className="text-3xl font-bold text-center mb-10">
            Connected Data Ecosystem
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {sources.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <Card className="bg-slate-900 border-slate-700 p-6 flex flex-col items-center hover:border-cyan-500 transition-all">

                    <Icon className="h-10 w-10 text-cyan-400 mb-4" />

                    <h3 className="font-semibold text-lg text-white">
                      {item.name}
                    </h3>

                  </Card>
                </motion.div>
              );
            })}

          </div>

        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">

          <Card className="bg-slate-900 border-slate-700 p-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              Explainable AI
            </h3>

            <p className="text-slate-300">
              Transparent scoring with factor-wise explanations instead of
              black-box credit decisions.
            </p>
          </Card>

          <Card className="bg-slate-900 border-slate-700 p-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              Real-time Risk
            </h3>

            <p className="text-slate-300">
              Continuously evaluates financial health using alternate banking
              signals and digital transactions.
            </p>
          </Card>

          <Card className="bg-slate-900 border-slate-700 p-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              Financial Inclusion
            </h3>

            <p className="text-slate-300">
              Enables faster onboarding of New-to-CCredit and New-to-Bank
              MSMEs using trusted alternate data.
            </p>
          </Card>

        </div>

      </section>

    </main>
  );
}