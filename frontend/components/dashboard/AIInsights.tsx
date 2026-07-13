import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface Props {
  insights: string[];
}

export default function AIInsights({ insights }: Props) {
  return (
    <Card className="rounded-3xl shadow-lg h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-blue-600" size={22} />
          AI Insights
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-4">
          {insights.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
