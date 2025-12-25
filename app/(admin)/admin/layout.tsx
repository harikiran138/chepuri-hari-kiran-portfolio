import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return ( 
    <div className="h-full bg-background">
        {children}
    </div>
   );
}
 
export default AdminLayout;
