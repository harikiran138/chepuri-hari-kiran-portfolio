import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  interface RequestListProps {
    requests: any[]; // Using any for speed, but should ideally use Prisma types
    isAdmin?: boolean;
  }
  
  export const RequestList = ({ requests, isAdmin }: RequestListProps) => {
    if (!requests || requests.length === 0) {
        return (
            <div className="text-center p-10 text-muted-foreground">
                No requests found.
            </div>
        )
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <Card key={req.id} className="bg-card border-border">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{req.companyName}</CardTitle>
                    <CardDescription>{new Date(req.createdAt).toLocaleDateString()}</CardDescription>
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
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{req.roleType}</span>
                </div>
                {req.budgetRange && (
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium">{req.budgetRange}</span>
                    </div>
                )}
                 {isAdmin && req.user && (
                    <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="text-muted-foreground">User:</span>
                        <span className="font-medium">{req.user.name || req.user.email}</span>
                    </div>
                )}
                <div className="pt-2">
                    <p className="text-muted-foreground line-clamp-3">{req.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
