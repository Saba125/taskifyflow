import { CreateProfile } from "@/lib/create-profile";
import SideBar from "../_components/Sidebar";
const OrganizationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const profile = await CreateProfile();

  return (
    <main className="pt-20 mx-auto  md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
