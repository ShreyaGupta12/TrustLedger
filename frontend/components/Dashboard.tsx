"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  TrendingUp,
  IndianRupee,
  Building2,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

type DashboardData = {
  trust_score: number;
  loan_amount: string;
  confidence: number;
  risk: string;
  status: string;
  radar: {
    subject: string;
    value: number;
  }[];
};

const defaultData: DashboardData = {
  trust_score: 89,
  loan_amount: "15L",
  confidence: 93,
  risk: "Low Risk",
  status: "Credit Ready",
  radar: [
  { subject: "GST", value: 96 },
  { subject: "UPI", value: 91 },
  { subject: "AA", value: 88 },
  { subject: "EPFO", value: 94 },
  { subject: "Growth", value: 92 },
  { subject: "Liquidity", value: 84 },
  ],
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const api =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://trustledger-z47p.onrender.com";

    fetch(`${api}/dashboard/`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  const dashboard = data ?? defaultData;
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              TrustLedger Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              AI-powered MSME Financial Health Assessment
            </p>
          </div>

          <Badge className="bg-green-600 text-white text-base px-4 py-2">
            {dashboard.risk}
          </Badge>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Trust Quotient</CardTitle>
            </CardHeader>

            <CardContent>
              <h2 className="text-6xl font-bold text-cyan-400">
                {dashboard.trust_score}
              </h2>

              <p className="text-slate-400 mt-2">
                Excellent Financial Health
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Eligible Loan</CardTitle>
            </CardHeader>

            <CardContent>

              <div className="flex items-center gap-2">

                <IndianRupee />

                <h2 className="text-3xl font-bold">
                  {dashboard.loan_amount}
                </h2>

              </div>

              <p className="text-slate-400 mt-2">
                Working Capital Loan
              </p>

            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">AI Confidence</CardTitle>
            </CardHeader>

            <CardContent>

              <h2 className="text-5xl font-bold text-green-400">
                {dashboard.confidence}%
              </h2>

              <p className="text-slate-400 mt-2">
                Explainable Prediction
              </p>

            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Status</CardTitle>
            </CardHeader>

            <CardContent>

              <div className="flex items-center gap-2">

                <ShieldCheck className="text-green-400" />

                <span className="text-slate-200"> {dashboard.status}</span>

              </div>

            </CardContent>
          </Card>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">

            <CardHeader>

              <CardTitle className="text-white">
                Financial Health Radar
              </CardTitle>

            </CardHeader>

            <CardContent style={{ height: 350 }}>

              <ResponsiveContainer width="100%" height="100%">

                <RadarChart data={dashboard.radar}>

                  <PolarGrid />

                  <PolarAngleAxis
  dataKey="subject"
  tick={{ fill: "#ffffff", fontSize: 14 }}
/>

                  <Radar
                    dataKey="value"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.5}
                  />

                </RadarChart>

              </ResponsiveContainer>

            </CardContent>

          </Card>

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">

            <CardHeader>

              <CardTitle className="text-white">

                Explainable AI

              </CardTitle>

            </CardHeader>

            <CardContent className="space-y-4">

              <div className="flex justify-between">

                <span className="text-slate-200">GST Compliance</span>

                <Badge className="bg-cyan-600 text-white hover:bg-cyan-600">
  +18
</Badge>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-200">UPI Stability</span>

                <Badge>+15</Badge>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-200">Payroll Consistency</span>

                <Badge>+14</Badge>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-200">Business Growth</span>

                <Badge>+15</Badge>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-200">Liquidity</span>

                <Badge>+13</Badge>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-200">Cash Flow</span>

                <Badge>+14</Badge>

              </div>

            </CardContent>

          </Card>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">

            <CardHeader>

              <CardTitle className="text-white">

                AI Recommendations

              </CardTitle>

            </CardHeader>

            <CardContent className="space-y-5">

              <div className="flex gap-3">

                <TrendingUp className="text-cyan-400"/>

                <div>

                  <h3 className="font-semibold">

                    Increase Digital Collections

                  </h3>

                  <p className="text-slate-400">

                    Estimated Trust Quotient +2

                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Building2 className="text-cyan-400"/>

                <div>

                  <h3 className="font-semibold">

                    Maintain GST Filing Consistency

                  </h3>

                  <p className="text-slate-400">

                    Estimated Trust Quotient +3

                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Wallet className="text-cyan-400"/>

                <div>

                  <h3 className="font-semibold">

                    Improve Monthly Liquidity

                  </h3>

                  <p className="text-slate-400">

                    Estimated Trust Quotient +1

                  </p>

                </div>

              </div>

            </CardContent>

          </Card>

          <Card className="bg-slate-900 border-slate-700 text-white shadow-xl">

            <CardHeader>

              <CardTitle className="text-white">

                Connected Ecosystem

              </CardTitle>

            </CardHeader>

            <CardContent className="space-y-4">

              {[
                "GST Network",
                "UPI",
                "Account Aggregator",
                "EPFO",
                "OCEN",
                "ULI",
              ].map((item) => (

                <div
                  key={item}
                  className="flex justify-between items-center"
                >

                  <span className="text-slate-200">{item}</span>

                  <CheckCircle2 className="text-green-400"/>

                </div>

              ))}

            </CardContent>

          </Card>

        </div>

      </div>

    </main>
  );
}