import { Link } from "react-router-dom";
import {
  ArrowRight,
  Gavel,
  Users,
  BarChart3,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#111319] text-white">
      {/* Header */}
      <header className="border-b border-[#252936] bg-[#15171f]">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <div>
            <h1 className="text-[23px] font-bold">
              Bid<span className="text-[#6c63ff]">Dash</span>
            </h1>

            <p className="text-[9px] uppercase tracking-[2px] text-gray-600">
              Admin Platform
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              to="/dashboard"
              className="rounded-lg bg-[#6c63ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#5d55ee]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-5 sm:px-8">
        <section className="flex min-h-[calc(100vh-82px)] items-center py-16">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#302d55] bg-[#6c63ff]/10 px-3 py-1.5 text-[10px] uppercase tracking-[1.5px] text-[#8179ff]">
                Smart Bid Management
              </div>

              <h2 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Manage your
                <span className="block text-[#6c63ff]">
                  bidding platform.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600">
                A powerful dashboard for monitoring bids,
                managing users and tracking your business
                performance from one simple interface.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 rounded-lg bg-[#6c63ff] px-5 py-3 text-sm font-medium text-white hover:bg-[#5d55ee]"
                >
                  Open Dashboard
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/bid"
                  className="rounded-lg border border-[#292d38] bg-[#181b23] px-5 py-3 text-sm font-medium text-gray-400 hover:text-white"
                >
                  Explore Bids
                </Link>
              </div>
            </div>

            {/* Preview */}
            <div className="rounded-2xl border border-[#252936] bg-[#181b23] p-4 shadow-2xl">
              <div className="rounded-xl border border-[#252936] bg-[#111319] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-600">
                      OVERVIEW
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Dashboard
                    </p>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-[#6c63ff]" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-[#181b23] p-3">
                    <Users
                      size={15}
                      className="text-[#8179ff]"
                    />

                    <p className="mt-3 text-[9px] text-gray-600">
                      Users
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      12.5K
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#181b23] p-3">
                    <Gavel
                      size={15}
                      className="text-[#8179ff]"
                    />

                    <p className="mt-3 text-[9px] text-gray-600">
                      Bids
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      2.8K
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#181b23] p-3">
                    <BarChart3
                      size={15}
                      className="text-[#8179ff]"
                    />

                    <p className="mt-3 text-[9px] text-gray-600">
                      Revenue
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      $48K
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex h-36 items-end gap-2 rounded-lg bg-[#181b23] p-4">
                  {[30, 48, 42, 65, 52, 75, 63, 86, 72, 94].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-[#6c63ff]"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;