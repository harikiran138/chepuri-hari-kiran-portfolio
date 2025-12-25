"use client";

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Link } from "lucide-react"; // Wait, Link is from next/link usually. Lucide has Link icon.
// I will just use Tailwind for Card if it doesn't exist.
// Checking previous list_dir, card.tsx was NOT there.
// So I will implement a basic Card structure here using Tailwind.

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <div className="w-[400px] shadow-md bg-card text-card-foreground rounded-xl border border-border">
      <div className="p-6 flex flex-col gap-y-1 items-center justify-center">
        <h1 className="text-3xl font-bold">🔐 Portal</h1>
        <p className="text-muted-foreground text-sm">{headerLabel}</p>
      </div>
      <div className="p-6 pt-0">
        {children}
      </div>
      <div className="p-6 pt-0 flex justify-center">
         <a href={backButtonHref} className="text-sm text-muted-foreground hover:text-primary underline">
            {backButtonLabel}
         </a>
      </div>
    </div>
  );
};
