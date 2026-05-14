"use client";

import { useState } from "react";

import { ArtistMockData } from "../../../ArtisanList/data";
import TextField from "./components/TextField/TextField";
import ServiceSelect from "./components/ServiceSelect/ServiceSelect";
import ArtistSelector from "./components/ArtistSelector/ArtistSelector";
import TextAreaField from "./components/TextAreaField/TextAreaField";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { IArtist, IService } from "@/src/types";

interface IProps {
  services: IService[]
  artists: IArtist[]
}

function CustomerInformation({services, artists}: IProps) {

  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">
        Thông Tin Khách Hàng
      </h2>

      <form>
        <TextField placeholder="Họ tên" />

        <div className="grid grid-cols-2 gap-8 mt-8">
          <TextField type="email" placeholder="Email" />
          <TextField type="tel" placeholder="Số điện thoại" />
        </div>

        <ServiceSelect services={services}/>

        <ArtistSelector artists={artists}/>

        <div className="mt-8">
          <TextAreaField placeholder="Yêu cầu đặc biệt (Số đo sơ bộ, mong muốn thiết kế...)" />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default CustomerInformation;