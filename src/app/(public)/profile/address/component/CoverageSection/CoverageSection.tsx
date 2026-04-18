function CoverageSection() {
  return (
    <div className=" bg-[#f6f3f2] overflow-hidden grid grid-cols-2 h-80 group">
      <div className="p-10 flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.3em] text-(--primary-color) font-black mb-4">
          Vùng phủ sóng
        </span>
        <h4 className="text-2xl font-bold mb-4 tracking-tight leading-snug">
          Giao hàng toàn cầu <br />
          từ những kinh đô thời trang.
        </h4>
        <p className="text-[#5f5f5f] text-sm leading-relaxed max-w-sm mb-8">
          Dịch vụ vận chuyển hỏa tốc từ Paris, Milan và London trực tiếp đến cửa
          nhà bạn.
        </p>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197!2d106.697582!3d10.775658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed3635%3A0x103efbf68436056b!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2svn!4v1712852000000!5m2!1svi!2svn"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default CoverageSection;
