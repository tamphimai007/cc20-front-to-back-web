import { Outlet } from "react-router";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

// rfce
function LayoutAdmin() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 bg-gray-200 p-2 m-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default LayoutAdmin;
