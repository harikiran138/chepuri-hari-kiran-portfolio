import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return ( 
    <div className="h-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <LoginForm />
    </div>
   );
}
 
export default LoginPage;
