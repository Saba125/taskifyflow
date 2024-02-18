import { CreateProfile } from "@/lib/create-profile";
import Navbar from "./_components/Navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default DashboardLayout;
