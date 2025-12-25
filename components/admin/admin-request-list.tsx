"use client";

import { useTransition } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { updateRequestStatus } from "@/actions/portal";
import { useRouter } from "next/navigation";

interface AdminRequestListProps {
    requests: any[];
}

export const AdminRequestList = ({ requests }: AdminRequestListProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleStatusUpdate = (id: string, status: string) => {
    startTransition(() => {
        updateRequestStatus(id, status)
            .then(() => {
                router.refresh(); // Refresh server components to get new data
            });
    });
  };

  if (!requests || requests.length === 0) {
      return (
          <div className="text-center p-10 text-muted-foreground">
              No requests content.
          </div>
      )
  }

  return (
    <div className="grid gap-4">
      {requests.map((req) => (
        <Card key={req.id} className="bg-card border-border">
          <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{req.companyName}</CardTitle>
                  <CardDescription>
                    {req.user?.name} ({req.user?.email}) - {new Date(req.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-bold ${
                    req.status === 'ACCEPTED' ? 'bg-emerald-500/20 text-emerald-500' :
                    req.status === 'REJECTED' ? 'bg-red-500/20 text-red-500' :
                    req.status === 'CONTACTED' ? 'bg-blue-500/20 text-blue-500' :
                    'bg-yellow-500/20 text-yellow-500'
                }`}>
                    {req.status}
                </div>
            </div>
          </CardHeader>
          <CardContent>
             <div className="space-y-1 mb-4">
                <a href={req.companyWebsite} target="_blank" className="text-sm text-blue-500 hover:underline">{req.companyWebsite}</a>
                <p className="font-semibold text-sm">{req.roleType} - {req.budgetRange || "No Budget"}</p>
             </div>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{req.message}</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
             <Button 
                variant="outline" 
                size="sm"
                disabled={isPending}
                onClick={() => handleStatusUpdate(req.id, "REJECTED")}
             >
                Reject
             </Button>
             <Button 
                variant="default" // Contacted is basically acknowledged
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isPending}
                onClick={() => handleStatusUpdate(req.id, "CONTACTED")}
             >
                Contact
             </Button>
             <Button 
                variant="default" 
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={isPending}
                onClick={() => handleStatusUpdate(req.id, "ACCEPTED")}
             >
                Accept
             </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
