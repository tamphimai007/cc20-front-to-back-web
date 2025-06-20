// rfce
import { CircleUserRound, LayoutDashboard } from "lucide-react";
function Sidebar() {
  return (
    <div className="bg-black w-48">
      {/* Profile */}
      <div
        className="text-white flex flex-col py-12 
      items-center"
      >
        <CircleUserRound size={48} />
        <p>Welcome ...</p>
      </div>

      {/* NavLink */}
      <div className="text-white flex gap-2 px-4 py-4">
        <span>
          <LayoutDashboard />
        </span>
        <p>Dashboard</p>
      </div>
    </div>
  );
}
export default Sidebar;
