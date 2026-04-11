import Footer from "@/src/layouts/Footer/Footer";
import Header from "@/src/layouts/Header/Header";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-25 flex-1">{children}</div>
      <Footer />
    </>
  );
}

export default PublicLayout;
