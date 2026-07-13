import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">

      <div className="flex items-center gap-3">

        <ShieldCheck
          size={34}
          className="text-blue-700"
        />

        <div>

          <h1 className="font-bold text-2xl">

            TrustLedger

          </h1>

          <p className="text-sm text-gray-500">

            AI MSME Financial Health Card

          </p>

        </div>

      </div>

    </nav>
  );
}
