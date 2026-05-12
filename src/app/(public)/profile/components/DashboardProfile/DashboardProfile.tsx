'use client';

import { useEffect, useState } from "react";
import ProfileAvatar from "./components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import DashboardNav from "./components/DashboardNav/DashboardNav";
import { IUser } from "@/src/types";
import { userService } from "@/src/services/user.service";

function DashboardProfile() {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        userService.getMe()
            .then(res => setUser(res?.result ?? null))
            .catch(console.error);
    }, []);

    const handleUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("avatar", file);

        const res = await userService.updateMe(formData);
        if (res?.result) setUser(res.result);
    };

    const handleUpdate = (updatedUser: IUser) => {
        setUser(updatedUser);
    };

    if (!user) return <div>Loading...</div>;

    return (
        <aside className="flex flex-col w-75 h-221 px-6">
            <div className="mt-2.5 mb-8 px-4">
                <ProfileAvatar
                    imgSrc={user.avatar}
                    onUpload={handleUpload}
                />
                <ProfileInfo user={user} onUpdate={handleUpdate}/>
            </div>
            <DashboardNav />
        </aside>
    );
}

export default DashboardProfile;