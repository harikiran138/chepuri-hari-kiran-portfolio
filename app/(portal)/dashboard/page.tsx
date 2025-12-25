import { auth } from "@/auth";
import { getEmployerRequests } from "@/actions/portal";
import { RequestList } from "@/components/portal/request-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  const requests = await getEmployerRequests();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center bg-card p-6 rounded-xl border shadow-sm">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {session?.user?.name || "Partner"}</p>
            </div>
            <div className="flex gap-4">
                <Link href="/collaborate">
                    <Button>New Request</Button>
                </Link>
                 <form action={async () => {
                    "use server"
                    await signOut()
                  }}>
                    <Button variant="outline">Sign Out</Button>
                  </form>
            </div>
        </div>

        <div>
            <h2 className="text-xl font-semibold mb-4">Your Requests</h2>
            {/* @ts-ignore */}
            <RequestList requests={requests.success || []} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
