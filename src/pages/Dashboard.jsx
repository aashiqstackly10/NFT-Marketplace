import { NavLink } from "react-router-dom";

import {
  Search,
  Sun,
  Bell,
  Grid2X2,
  BriefcaseBusiness,
  Heart,
  Star,
  CircleUserRound,
  Settings,
  LogOut,
  MoreHorizontal,
} from "lucide-react";

import profile1 from "../assets/images/profiles/profile1.jpg";
import profile2 from "../assets/images/profiles/profile2.jpg";

import artwork1 from "../assets/images/artworks/artwork1.jpg";
import artwork2 from "../assets/images/artworks/artwork2.jpg";


/* =========================
   TRENDING NFT DATA
========================= */

const trendingBids = [
  {
    id: 1,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 2,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 3,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 4,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 5,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 6,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 7,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
  {
    id: 8,
    title: "Liquid Wave",
    image: artwork1,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    value: "0.15 ETH",
  },
];


/* =========================
   SIDEBAR
========================= */

const sidebarItems = [
  {
    path: "/dashboard",
    icon: Grid2X2,
  },
  {
    path: "/bid",
    icon: BriefcaseBusiness,
  },
  {
    path: "/saved",
    icon: Heart,
  },
  {
    path: "/collection",
    icon: Star,
  },
  {
    path: "/profile",
    icon: CircleUserRound,
  },
  {
    path: "/settings",
    icon: Settings,
  },
];


function Dashboard() {
  return (
    <div className="min-h-screen bg-[#100d25] text-white">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 z-50 flex h-screen w-[43px] flex-col items-center border-r border-[#25203d] bg-[#100d25]">

        {/* LOGO */}

        <div className="flex h-[45px] w-full items-center justify-center border-b border-[#25203d]">

          <div className="flex h-[17px] w-[17px] items-center justify-center rounded-[4px] bg-[#7450ff]">

            <span className="text-[9px] font-bold text-white">
              ◎
            </span>

          </div>

        </div>


        {/* MENU */}

        <div className="flex flex-1 flex-col items-center gap-[25px] pt-[15px]">

          {sidebarItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-200 ${
                    isActive
                      ? "text-[#7750ff]"
                      : "text-[#514b69] hover:text-white"
                  }`
                }
              >

                <Icon
                  size={12}
                  strokeWidth={1.8}
                />

              </NavLink>
            );

          })}

        </div>


        {/* LOGOUT */}

        <NavLink
          to="/"
          className="mb-[38px] text-[#514b69] transition hover:text-white"
        >

          <LogOut
            size={12}
            strokeWidth={1.8}
          />

        </NavLink>

      </aside>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="ml-[43px] min-h-screen px-[18px] pb-10 pt-[11px] md:px-[36px]">


        {/* =====================================================
            TOP NAVBAR
        ===================================================== */}

        <header className="mb-[27px] flex h-[26px] items-center justify-between">

          {/* SEARCH */}

          <div className="flex h-[26px] w-[201px] items-center gap-[7px] rounded-[6px] bg-[#1d1935] px-[11px]">

            <Search
              size={12}
              strokeWidth={2}
              className="text-[#77718c]"
            />

            <input
              type="text"
              placeholder="Search Here"
              className="w-full bg-transparent text-[9px] text-white outline-none placeholder:text-[#69627d]"
            />

          </div>


          {/* RIGHT NAV */}

          <div className="flex items-center gap-[13px]">

            <button className="text-[#858097] transition hover:text-white">
              <Sun size={10} />
            </button>

            <button className="text-[#858097] transition hover:text-white">
              <Bell size={10} />
            </button>


            <NavLink to="/profile">

              <div className="h-[22px] w-[22px] overflow-hidden rounded-full border border-[#625979]">

                <img
                  src={profile1}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />

              </div>

            </NavLink>

          </div>

        </header>


        {/* =====================================================
            HERO + FEATURED AUCTION
        ===================================================== */}

        <section className="mb-[35px] grid grid-cols-1 gap-[26px] lg:grid-cols-[1.05fr_1fr]">


          {/* HERO */}

          <div className="relative h-[121px] overflow-hidden rounded-[11px] bg-gradient-to-br from-[#5631c9] via-[#7137df] to-[#1d174b]">

            {/* Background glow */}

            <div className="absolute -right-[25px] -top-[50px] h-[145px] w-[250px] rounded-full bg-[#c236ff]/40 blur-[28px]" />

            <div className="absolute -left-[35px] bottom-[-70px] h-[130px] w-[260px] rounded-full bg-[#4537ff]/50 blur-[30px]" />


            {/* Decorative lines */}

            <div className="absolute right-[30px] top-[-20px] h-[150px] w-[150px] rotate-[35deg] rounded-[40%] border border-white/10" />

            <div className="absolute right-[55px] top-[-30px] h-[150px] w-[120px] rotate-[35deg] rounded-[40%] border border-white/10" />


            {/* Text */}

            <div className="relative z-10 px-[16px] pt-[18px]">

              <h1 className="max-w-[190px] text-[15px] font-bold leading-[19px]">
                Discover, Collect, Sell
                <br />
                and Create your NFT
              </h1>

              <p className="mt-[6px] max-w-[230px] text-[7px] text-[#d4cdf7]">
                Digital marketplace for crypto collectibles and non fungible tokens
              </p>


              {/* Buttons */}

              <div className="mt-[10px] flex gap-[10px]">

                <NavLink
                  to="/collection"
                  className="rounded-[4px] bg-[#7650ff] px-[18px] py-[5px] text-[7px] font-medium transition hover:bg-[#8665ff]"
                >
                  Explore
                </NavLink>

                <NavLink
                  to="/bid"
                  className="rounded-[4px] bg-[#e9364d] px-[18px] py-[5px] text-[7px] font-medium transition hover:bg-[#f0475b]"
                >
                  Create
                </NavLink>

              </div>

            </div>

          </div>


          {/* FEATURED AUCTION */}

          <div className="flex h-[121px] overflow-hidden rounded-[11px] bg-[#1b1733] p-[10px]">

            {/* NFT IMAGE */}

            <div className="h-[100px] w-[132px] flex-shrink-0 overflow-hidden rounded-[9px]">

              <img
                src={artwork2}
                alt="Brighten LQ"
                className="h-full w-full object-cover"
              />

            </div>


            {/* AUCTION INFO */}

            <div className="min-w-0 flex-1 px-[10px]">

              {/* Creator */}

              <div className="flex items-center gap-[5px]">

                <div className="h-[20px] w-[20px] overflow-hidden rounded-full">

                  <img
                    src={profile2}
                    alt="John Abraham"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div>

                  <p className="text-[8px] font-semibold">
                    John Abraham
                  </p>

                  <span className="text-[6px] text-[#55ca69]">
                    ●
                  </span>

                </div>

              </div>


              <h3 className="mt-[9px] text-[10px] font-semibold">
                Brighten LQ
              </h3>


              {/* Auction details */}

              <div className="mt-[5px] grid grid-cols-2 gap-2">

                <div>

                  <p className="text-[7px] text-[#817b93]">
                    Auction time
                  </p>

                  <p className="mt-[3px] text-[7px] text-[#aaa4b8]">
                    3h 1m 50s
                  </p>

                </div>


                <div>

                  <p className="text-[7px] text-[#817b93]">
                    Current Bid :
                    <span className="ml-1 text-[#7750ff]">
                      0.05 ETH
                    </span>
                  </p>

                  <p className="mt-[3px] text-right text-[7px] text-[#aaa4b8]">
                    0.15 ETH
                  </p>

                </div>

              </div>


              {/* Buttons */}

              <div className="mt-[7px] flex gap-[7px]">

                <button className="flex-1 rounded-[4px] bg-[#7650ff] py-[5px] text-[7px] font-medium transition hover:bg-[#8665ff]">
                  Place a Bid
                </button>

                <button className="flex-1 rounded-[4px] bg-[#e9364d] py-[5px] text-[7px] font-medium transition hover:bg-[#f0475b]">
                  Details
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRENDING BIDS TITLE
        ===================================================== */}

        <div className="mb-[10px] flex items-center justify-between">

          <h2 className="text-[10px] font-semibold">
            Trending Bids
          </h2>


          <div className="flex items-center gap-[10px]">

            <button className="rounded-[8px] bg-[#7650ff] px-[9px] py-[3px] text-[6px] text-white">
              All
            </button>

            <button className="text-[7px] text-[#aaa4b8] transition hover:text-white">
              Artwork
            </button>

            <button className="text-[7px] text-[#aaa4b8] transition hover:text-white">
              Book
            </button>

          </div>

        </div>


        {/* =====================================================
            NFT GRID
        ===================================================== */}

        <section className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {trendingBids.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-[10px] bg-[#1b1733] p-[10px] transition duration-300 hover:-translate-y-[2px]"
            >

              {/* NFT IMAGE */}

              <div className="h-[100px] overflow-hidden rounded-[9px] bg-black">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />

              </div>


              {/* CARD CONTENT */}

              <div className="px-[1px] pb-[1px]">

                <div className="mt-[14px] flex items-center justify-between">

                  <h3 className="text-[9px] font-semibold">
                    {item.title}
                  </h3>

                  <button className="text-[#706a83] hover:text-white">
                    <MoreHorizontal size={11} />
                  </button>

                </div>


                {/* Bid information */}

                <div className="mt-[8px] grid grid-cols-2">

                  <div>

                    <p className="text-[7px] text-white">
                      Auction time
                    </p>

                    <p className="mt-[6px] text-[7px] text-[#706a83]">
                      {item.time}
                    </p>

                  </div>


                  <div className="text-right">

                    <p className="text-[7px] text-white">
                      Current Bid
                    </p>

                    <p className="mt-[3px] text-[7px] text-[#7650ff]">
                      {item.bid}
                    </p>

                    <p className="mt-[2px] text-[7px] text-[#706a83]">
                      {item.value}
                    </p>

                  </div>

                </div>


                {/* Place bid */}

                <button className="mt-[9px] w-full rounded-[5px] bg-[#7650ff] py-[6px] text-[7px] font-medium text-white transition hover:bg-[#8665ff]">
                  Place a Bid
                </button>

              </div>

            </div>

          ))}

        </section>

      </main>

    </div>
  );
}

export default Dashboard;