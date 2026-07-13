import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  score: number;
  status: string;
}

export default function MetricCard({
  title,
  score,
  status,
}: MetricCardProps) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all">
      <CardContent className="p-6">

        <h3 className="text-sm text-gray-500">
          {title}
        </h3>

        <h2 className="text-3xl font-bold mt-3">
          {score}%
        </h2>

        <p className="mt-2 text-green-600 font-medium">
          {status}
        </p>

      </CardContent>
    </Card>
  );
}
