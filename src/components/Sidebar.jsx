import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ClipboardList,
  Heart,
  Star,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Home", path: "/", icon: LayoutGrid },
  { name: "Bids", path: "/bid", icon: ClipboardList },
  { name: "Saved", path: "/saved", icon: Heart },
  { name: "Collection", path: "/collection", icon: Star },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-12 flex-col items-center justify-between bg-sidebar py-4">
      <div className="flex flex-col items-center gap-7">
        {/* Logo */}
        <div className="h-6 w-6 rounded-md bg-brand" />

        {/* Navigation */}
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              title={item.name}
              className={({ isActive }) =>
                isActive ? "text-brand" : "text-[#6b6785] hover:text-white"
              }
            >
              <Icon size={16} />
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <button title="Logout" className="text-[#6b6785] hover:text-white">
        <LogOut size={16} />
      </button>
    </aside>
  );
}

export default Sidebar;