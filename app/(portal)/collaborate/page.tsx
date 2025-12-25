import { RequestForm } from "@/components/portal/request-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const CollaboratePage = () => {
  return ( 
    <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto mb-6">
            <Link href="/dashboard">
                <Button variant="ghost" className="gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Dashboard
                </Button>
            </Link>
        </div>
        <RequestForm />
    </div>
   );
}
 
export default CollaboratePage;
