import { Toaster } from "@/components/ui/sonner";
import Footer from "@/src/layouts/Footer/Footer";
import Header from "@/src/layouts/Header/Header";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-(--header-height)">{children}</div>
      <Toaster />
      <Footer />
    </>
  );
}

export default PublicLayout;
