import AuthTabs from "./components/AuthTabs/AuthTabs";
import Branding from "./components/Branding/Branding";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <Branding />
      <div className="mt-10 px-24 mb-24">
        <AuthTabs>{children}</AuthTabs>
      </div>
    </div>
  );
}

export default AuthLayout;
