import Branding from "./components/Branding/Branding";
import LoginForm from "./components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="grid grid-cols-2  ">
      <Branding />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
