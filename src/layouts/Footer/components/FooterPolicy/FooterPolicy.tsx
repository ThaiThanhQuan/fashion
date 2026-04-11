import { Globe } from "lucide-react";
import { Share2 } from "lucide-react";

function FooterPolicy() {
  return (
    <div className="flex justify-between pt-12">
      <span className="text-xs tracking-widest uppercase text-(--primary-color)">
        © 2024 DIGITAL COUTURE. BẢO LƯU MỌI QUYỀN.
      </span>

      <div className="flex gap-8 text-(--primary-color)/70">
        <Globe size={24} />
        <Share2 size={24} />
      </div>
    </div>
  );
}

export default FooterPolicy;
