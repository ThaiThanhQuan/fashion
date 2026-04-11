function ServiceCard() {
  return (
    <div className="bg-[#f0eded] p-12">
      <h4 className="mb-4 text-xl font-bold font-headline">
        Dịch vụ Xưởng may
      </h4>
      <p className="mb-8 text-xs tracking-widest uppercase font-body text-on-surface-variant">
        May đo riêng & Tư vấn cá nhân
      </p>
      <button className="text-xs font-bold uppercase text-(--primary-color) tracking-widest border-b border-secondary text-secondary cursor-pointer">
        Đặt lịch hẹn
      </button>
    </div>
  );
}

export default ServiceCard;
