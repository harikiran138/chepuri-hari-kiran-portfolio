import { RegisterForm } from "@/components/auth/register-form";

const SignupPage = () => {
  return ( 
    <div className="h-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <RegisterForm />
    </div>
   );
}
 
export default SignupPage;
