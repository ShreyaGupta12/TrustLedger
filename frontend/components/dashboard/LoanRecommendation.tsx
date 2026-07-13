import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark } from "lucide-react";

interface Props {
  amount: string;
  type: string;
  confidence: number;
}

export default function LoanRecommendation({
  amount,
  type,
  confidence,
}: Props) {
  return (
    <Card className="rounded-3xl shadow-xl border-l-8 border-blue-600">
      <CardContent className="p-6">

        <div className="flex items-center gap-3">

          <Landmark
            className="text-blue-700"
            size={30}
          />

          <div>

            <h2 className="font-bold text-xl">
              Recommended Loan
            </h2>

            <p className="text-gray-500">
              AI Decision Engine
            </p>

          </div>

        </div>

        <div className="mt-8">

          <p className="text-4xl font-bold">

            {amount}

          </p>

          <p className="mt-2">

            {type}

          </p>

          <Badge className="mt-5">

            Confidence {confidence}%

          </Badge>

        </div>

      </CardContent>
    </Card>
  );
}
