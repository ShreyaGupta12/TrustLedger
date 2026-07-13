import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Props {
  score: number;
}

export default function TrustScore({ score }: Props) {
  return (
    <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

      <CardContent className="p-8">

        <p className="text-lg opacity-80">
          Trust Quotient
        </p>

        <h1 className="text-7xl font-bold mt-4">
          {score}
        </h1>

        <p className="mt-2 text-xl">
          Excellent Financial Health
        </p>

        <div className="mt-6">
          <Progress value={score} />
        </div>

      </CardContent>

    </Card>
  );
}
