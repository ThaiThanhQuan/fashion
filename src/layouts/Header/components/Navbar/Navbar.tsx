function Navbar() {
  return (
    <div className="flex justify-center items-center  ">
      <ul className="flex items-center gap-10 cursor-pointer">
        <li className="text-sm font-medium uppercase tracking-widest border-b-2 border-black pb-1">
          Collections
        </li>
        <li className=" text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          Lookbook
        </li>
        <li className=" text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          Atelier
        </li>
        <li className=" text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          Archive
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
