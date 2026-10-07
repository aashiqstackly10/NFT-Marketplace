import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-page text-white">
      <Sidebar />

      <div className="ml-12">
        <main className="mx-auto max-w-[1280px] px-8 py-4 pb-12">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;