import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/src/components/AuthProvider/AuthProvider";
import Footer from "@/src/layouts/Footer/Footer";
import Header from "@/src/layouts/Header/Header";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-(--header-height)"><AuthProvider>{children}</AuthProvider></div>
      <Toaster />
      <Footer />
    </>
  );
}

export default PublicLayout;
