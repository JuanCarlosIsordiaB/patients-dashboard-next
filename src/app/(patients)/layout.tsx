import SideBar from "@/components/SideBar";

export default function SideBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
