import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-serif font-bold text-gold-500 mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-stone-200 mb-4">
          Case File Not Found
        </h2>
        <p className="text-stone-400 mb-8">
          The project you're looking for has been classified or doesn't exist in our records.
        </p>
        <Link href="/">
          <Button className="bg-gold-600 hover:bg-gold-500 text-black rounded-none">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}