import { ICategoryServiceItem } from "../../../data";

interface IProps {
  service: ICategoryServiceItem;
}

function Procedure({ service }: IProps) {
  return (
    <div className="bg-[#f6f3f2] py-(--padding-y)">
      <div className="container">
        <div className="text-center mb-24">
          <p className="font-label text-(--primary-color) tracking-[0.3em] uppercase mb-4 text-sm">
            Hành Trình Kiến Tạo
          </p>
          <h2 className="text-5xl font-bold tracking-tighter">
            Quy Trình May Đo
          </h2>
        </div>

        <div className="grid grid-cols-4">
          {service.steps.map((step) => (
            <div
              key={step.no}
              className="group relative p-10 bg-[#fcf9f8] border-r border-[#b2b2b11a] hover:bg-white transition-colors duration-500"
            >
              <span className="text-6xl font-bold text-[#e4e2e280] mb-8 block">
                {step.no}
              </span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#5f5f5f] text-sm font-light leading-relaxed">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Procedure;
