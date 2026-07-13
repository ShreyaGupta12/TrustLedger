"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

interface Props {
    data: any[];
}

export default function FinancialChart({ data }: Props) {

    return (

        <Card className="rounded-3xl shadow-lg">

            <CardContent className="p-6">

                <h2 className="text-xl font-bold mb-6">
                    Financial Health Trend
                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            dataKey="score"
                            strokeWidth={4}
                            type="monotone"
                        />

                    </LineChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}
