'use client'

import TextField from "./components/TextField/TextField";
import ServiceSelect from "./components/ServiceSelect/ServiceSelect";
import ArtistSelector from "./components/ArtistSelector/ArtistSelector";
import TextAreaField from "./components/TextAreaField/TextAreaField";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { IArtist, IService } from "@/src/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { appointmentService } from "@/src/services/appointments.service";
import { useAuthStore } from "@/src/store/useAuthStore";

interface IProps {
  services: IService[];
  artists: IArtist[];
  date: Date | undefined;
  time: string;
}

function CustomerInformation({ services, artists, date, time }: IProps) {
  const {isLoggedIn} = useAuthStore()

  const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        specialRequest: '',
        serviceId: '',
        artistId: ''
    });

    const handleChange = (name: string, value: string) => {
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!isLoggedIn) {
          toast.error("Vui lòng đăng nhập để chọn đặt lịch");
          return;
        }

        if (!date || !time) {
            toast.error("Vui lòng chọn ngày và giờ!");
            return;
        }

        if (!form.serviceId) {
            toast.error("Vui lòng chọn dịch vụ!");
            return;
        }

        if (!form.artistId) {
            toast.error("Vui lòng chọn chuyên gia!");
            return;
        }

        try {
            setLoading(true);
            await appointmentService.createAppointments({...form, appointmentDate: date.toISOString().split('T')[0], appointmentTime: time})
            toast.success("Đặt lịch thành công! Vui lòng kiểm tra email.");
        } catch {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div>
      <h2 className="mb-2 text-4xl font-bold tracking-tighter uppercase">
        Thông Tin Khách Hàng
      </h2>

      <form onSubmit={handleSubmit}>
         <TextField
              placeholder="Họ tên"
              value={form.customerName}
              onChange={(v) => handleChange('customerName', v)}
              required
          />

         <div className="grid grid-cols-2 gap-8 mt-8">
              <TextField
                  type="email"
                  placeholder="Email"
                  value={form.customerEmail}
                  onChange={(v) => handleChange('customerEmail', v)}
                  required
              />
              <TextField
                  type="tel"
                  placeholder="Số điện thoại"
                  value={form.customerPhone}
                  onChange={(v) => handleChange('customerPhone', v)}
                  required
              />
          </div>

        <ServiceSelect
            services={services}
            value={form.serviceId}
            onChange={(v) => handleChange('serviceId', v)}
        />

        <ArtistSelector
            artists={artists}
            selected={form.artistId}
            onSelect={(v) => handleChange('artistId', v)}
        />

        <div className="mt-8">
            <TextAreaField
                placeholder="Yêu cầu đặc biệt (Số đo sơ bộ, mong muốn thiết kế...)"
                value={form.specialRequest}
                onChange={(v) => handleChange('specialRequest', v)}
            />
            <SubmitButton loading={loading} />
        </div>
    </form>
    </div>
  );
}

export default CustomerInformation;