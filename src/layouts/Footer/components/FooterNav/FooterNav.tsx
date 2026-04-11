import { FooterNavMockData } from "./data";

function FooterNav() {
  return (
    <div className="grid grid-cols-3 gap-16">
      {FooterNavMockData.map((item) => (
        <div key={item.id}>
          <h5 className="text-xs font-bold tracking-widest uppercase text-stone-900 ">
            {item.title}
          </h5>
          <ul className="mt-4 cursor-pointer">
            <li className="text-xs tracking-widest uppercase transition-colors text-(--primary-color) hover:text-[#1c1917]">
              {item.label1}
            </li>
            <li className="mt-2 text-xs tracking-widest uppercase transition-colors text-(--primary-color) hover:text-[#1c1917]">
              {item.label2}
            </li>
            <li className="mt-2 text-xs tracking-widest uppercase transition-colors text-(--primary-color) hover:text-[#1c1917]">
              {item.label3}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterNav;
