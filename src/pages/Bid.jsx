import DashboardLayout from "../layouts/DashboardLayout";
import { bids } from "../data/bids";
import {
  Gavel,
  Clock3,
  CheckCircle2,
  Plus,
  MoreHorizontal,
} from "lucide-react";

function Bid() {
  const bids = [
    {
      id: "#BD-1024",
      product: "Smart Watch Pro",
      bidder: "James Wilson",
      amount: "$1,250",
      time: "02:45:18",
      status: "Live",
    },
    {
      id: "#BD-1023",
      product: "Wireless Headset",
      bidder: "Sarah Miller",
      amount: "$860",
      time: "01:28:42",
      status: "Live",
    },
    {
      id: "#BD-1022",
      product: "Gaming Laptop",
      bidder: "David Brown",
      amount: "$2,400",
      time: "00:45:12",
      status: "Ending",
    },
    {
      id: "#BD-1021",
      product: "Smart Phone",
      bidder: "Emily Davis",
      amount: "$1,780",
      time: "Ended",
      status: "Completed",
    },
    {
      id: "#BD-1020",
      product: "Bluetooth Speaker",
      bidder: "Michael Smith",
      amount: "$520",
      time: "Ended",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout title="Bids">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[1.5px] text-[#6c63ff]">
            Management
          </p>

          <h1 className="text-[25px] font-semibold text-white">
            Bids
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Track and manage all active bids.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-[#6c63ff] px-4 py-2.5 text-sm font-medium text-white">
          <Plus size={16} />
          Create Bid
        </button>
      </div>

      {/* Bid stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#252936] bg-[#181b23] p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6c63ff]/10 text-[#8179ff]">
              <Gavel size={19} />
            </div>

            <span className="text-[10px] text-gray-600">
              Today
            </span>
          </div>

          <p className="mt-5 text-xs text-gray-600">
            Active Bids
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-white">
            128
          </h2>
        </div>

        <div className="rounded-2xl border border-[#252936] bg-[#181b23] p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
              <Clock3 size={19} />
            </div>

            <span className="text-[10px] text-gray-600">
              Waiting
            </span>
          </div>

          <p className="mt-5 text-xs text-gray-600">
            Pending Bids
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-white">
            42
          </h2>
        </div>

        <div className="rounded-2xl border border-[#252936] bg-[#181b23] p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 size={19} />
            </div>

            <span className="text-[10px] text-gray-600">
              This month
            </span>
          </div>

          <p className="mt-5 text-xs text-gray-600">
            Completed Bids
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-white">
            315
          </h2>
        </div>
      </div>

      {/* Bid table */}
      <div className="mt-5 rounded-2xl border border-[#252936] bg-[#181b23]">
        <div className="flex items-center justify-between border-b border-[#252936] p-5">
          <div>
            <h2 className="text-sm font-semibold text-white">
              All Bids
            </h2>

            <p className="mt-1 text-[11px] text-gray-600">
              Current bidding activity
            </p>
          </div>

          <button className="rounded-lg border border-[#292d38] p-2 text-gray-500 hover:bg-[#292d38] hover:text-white">
            <MoreHorizontal size={17} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#252936] text-left">
                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Bid ID
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Product
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Bidder
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Current Bid
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Time
                </th>

                <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-gray-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid) => (
                <tr
                  key={bid.id}
                  className="border-b border-[#252936] last:border-0 hover:bg-[#1c1f28]"
                >
                  <td className="px-5 py-4 text-xs text-[#8179ff]">
                    {bid.id}
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-300">
                    {bid.product}
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-500">
                    {bid.bidder}
                  </td>

                  <td className="px-5 py-4 text-xs font-semibold text-white">
                    {bid.amount}
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-500">
                    {bid.time}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] ${
                        bid.status === "Live"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : bid.status === "Ending"
                          ? "bg-orange-500/10 text-orange-400"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {bid.status}
                    </span>
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

export default Bid;