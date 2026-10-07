import DashboardLayout from "../layouts/DashboardLayout";
import { Search, MoreHorizontal, UserPlus } from "lucide-react";

function Users() {
  const users = [
    {
      name: "James Wilson",
      email: "james@example.com",
      bids: 24,
      spent: "$8,450",
      status: "Active",
    },
    {
      name: "Sarah Miller",
      email: "sarah@example.com",
      bids: 18,
      spent: "$6,240",
      status: "Active",
    },
    {
      name: "David Brown",
      email: "david@example.com",
      bids: 31,
      spent: "$12,580",
      status: "Active",
    },
    {
      name: "Emily Davis",
      email: "emily@example.com",
      bids: 12,
      spent: "$4,820",
      status: "Inactive",
    },
    {
      name: "Michael Smith",
      email: "michael@example.com",
      bids: 27,
      spent: "$9,750",
      status: "Active",
    },
    {
      name: "Olivia Johnson",
      email: "olivia@example.com",
      bids: 15,
      spent: "$5,420",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout title="Users">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[1.5px] text-[#6c63ff]">
            Management
          </p>

          <h1 className="text-[25px] font-semibold text-white">
            Users
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage all registered users.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-[#6c63ff] px-4 py-2.5 text-sm font-medium text-white">
          <UserPlus size={16} />
          Add User
        </button>
      </div>

      <div className="rounded-2xl border border-[#252936] bg-[#181b23]">
        {/* Search */}
        <div className="flex flex-col justify-between gap-3 border-b border-[#252936] p-5 sm:flex-row">
          <div>
            <h2 className="text-sm font-semibold text-white">
              All Users
            </h2>

            <p className="mt-1 text-[11px] text-gray-600">
              12,548 users found
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[#292d38] bg-[#14161d] px-3 py-2">
            <Search size={15} className="text-gray-600" />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-transparent text-xs text-gray-300 outline-none placeholder:text-gray-700 sm:w-[180px]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#252936] text-left">
                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  User
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Bids
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Total Spent
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Status
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.email}
                  className="border-b border-[#252936] last:border-0 hover:bg-[#1c1f28]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292d38] text-xs font-semibold text-[#8179ff]">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-300">
                          {user.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-600">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-400">
                    {user.bids}
                  </td>

                  <td className="px-5 py-4 text-xs font-medium text-gray-300">
                    {user.spent}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] ${
                        user.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button className="rounded-lg p-1.5 text-gray-600 hover:bg-[#292d38] hover:text-white">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Users;