import { Search, Sun, Bell } from "lucide-react";
import profile from "../assets/images/profiles/profile1.jpg";

function Navbar() {
  return (
    <header className="flex items-center justify-between">
      {/* Search */}
      <div className="flex h-10 w-72 items-center gap-3 rounded-xl bg-card px-4">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search Here"
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <button><Sun size={14} /></button>
        <button><Bell size={14} /></button>
        <img
          src={profile}
          alt="Profile"
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default Navbar;