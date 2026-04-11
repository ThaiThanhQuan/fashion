import Actions from "./components/Actions/Actions";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/Navbar/Navbar";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 
      bg-white/70 backdrop-blur-md border-b border-gray-100/50 
      transition-all duration-300"
    >
      <div className="container py-6 flex items-center justify-between">
        <Brand />
        <Navbar />
        <Actions />
      </div>
    </header>
  );
}

export default Header;
