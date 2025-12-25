import { auth } from "@/auth";
import { getRequests } from "@/actions/portal";
import { AdminRequestList } from "@/components/admin/admin-request-list";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import Link from "next/link";

const AdminDashboardPage = async () => {
    const session = await auth();
    const requests = await getRequests();

    return ( 
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex justify-between items-center bg-card p-6 rounded-xl border shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold">Admin Portal</h1>
                        <p className="text-muted-foreground">Manage Collaboration Requests</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/dashboard"><Button variant="ghost">User View</Button></Link>
                        <form action={async () => {
                            "use server"
                            await signOut()
                        }}>
                            <Button variant="outline">Sign Out</Button>
                        </form>
                    </div>
                </div>

                <AdminRequestList requests={requests.success || []} />
            </div>
        </div>
     );
}
 
export default AdminDashboardPage;
