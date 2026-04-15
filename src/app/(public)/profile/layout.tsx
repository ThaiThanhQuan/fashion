import DashboardProfile from "./components/DashboardProfile/DashboardProfile";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardProfile />
      <div className="mt-2.5 flex-1">{children}</div>
    </div>
  );
}

export default ProfileLayout;
