import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/Sidebar";
import CustomProvider from "@/store/provider";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <main className="flex h-screen w-full font-inter">
      <CustomProvider>
      <SideBar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
      </CustomProvider>
    </main>
  );
}
