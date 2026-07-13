import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  sources: string[];
}

export default function DataSources({ sources }: Props) {
  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>Connected Data Sources</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-3">
        {sources.map((source) => (
          <Badge
            key={source}
            variant="secondary"
            className="px-4 py-2"
          >
            ✓ {source}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
