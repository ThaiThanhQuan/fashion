'use client';

import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
    imgSrc: string;
    onUpload: (file: File) => void;
}

function ProfileAvatar({ imgSrc, onUpload }: IProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState(imgSrc);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));  
            onUpload(file);
        }
    };

    return (
        <div className="mb-2">
            <div
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => fileInputRef.current?.click()}
            >
                <Avatar className="w-17.5 h-17.5">
                    <AvatarImage src={preview} className="object-cover" />
                    <AvatarFallback className="rounded-md text-[10px]">
                        BRAND
                    </AvatarFallback>
                </Avatar>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
                accept="image/*"
                className="hidden"
            />
        </div>
    );
}

export default ProfileAvatar;