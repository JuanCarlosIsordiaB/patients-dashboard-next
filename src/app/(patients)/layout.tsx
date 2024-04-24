import SideBar from "@/components/SideBar";


export default function SideBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100">
      
      <SideBar />
      <div className="p-4 sm:ml-64 ">
        <h2 className="text-center font-bold text-3xl text-gray-600">Manage your <span className="text-indigo-500">patients</span></h2>
        {children}
      </div>
    </div>
  );
}
