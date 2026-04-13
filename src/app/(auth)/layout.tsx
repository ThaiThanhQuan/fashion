import Header from "@/src/layouts/Header/Header";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-25 flex-1">{children}</div>
    </>
  );
}

export default AuthLayout;
