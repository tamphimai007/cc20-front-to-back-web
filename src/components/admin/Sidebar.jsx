// rfce
import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/links";
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
      {sidebarLink.map((item) => {
        return (
          <Link
            key={item.label}
            to={item.link}
            className="text-white flex gap-2
       px-4 py-2 hover:bg-gray-400"
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default Sidebar;
