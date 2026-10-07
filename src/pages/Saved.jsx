import DashboardLayout from "../layouts/DashboardLayout";
import { Heart, MoreHorizontal } from "lucide-react";

import artwork1 from "../assets/images/artworks/artwork1.jpg";
import artwork2 from "../assets/images/artworks/artwork2.jpg";

const savedItems = [
  {
    id: 1,
    title: "Digital Artwork",
    likes: 124,
    image: artwork1,
  },
  {
    id: 2,
    title: "Creative Vision",
    likes: 98,
    image: artwork2,
  },
  {
    id: 3,
    title: "Digital World",
    likes: 156,
    image: artwork1,
  },
  {
    id: 4,
    title: "Future Design",
    likes: 87,
    image: artwork2,
  },
  {
    id: 5,
    title: "Modern Art",
    likes: 143,
    image: artwork1,
  },
  {
    id: 6,
    title: "Creative Space",
    likes: 76,
    image: artwork2,
  },
  {
    id: 7,
    title: "Digital Vision",
    likes: 112,
    image: artwork1,
  },
  {
    id: 8,
    title: "Neon Art",
    likes: 91,
    image: artwork2,
  },
];

function Saved() {
  return (
    <DashboardLayout title="Saved">
      <div className="min-h-screen bg-[#0e0b1b] text-white">

        {/* Page Header */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Saved
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Your saved artworks
            </p>
          </div>

          <div className="rounded-lg border border-[#292342] bg-[#17132a] px-4 py-2">
            <span className="text-xs text-gray-400">
              {savedItems.length} Saved
            </span>
          </div>
        </div>

        {/* Artwork Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {savedItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-[#292342] bg-[#17132a] transition duration-300 hover:-translate-y-1 hover:border-[#6254d8]"
            >

              {/* Artwork Image */}
              <div className="h-[200px] overflow-hidden bg-[#111319]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Card Details */}
              <div className="p-4">

                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Digital Artwork
                    </p>
                  </div>

                  <button className="text-gray-600 transition hover:text-white">
                    <MoreHorizontal size={17} />
                  </button>

                </div>

                {/* Bottom Section */}
                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center gap-1.5">
                    <Heart
                      size={12}
                      className="text-gray-500"
                      fill="currentColor"
                    />

                    <span className="text-xs text-gray-500">
                      {item.likes}
                    </span>
                  </div>

                  <button className="rounded-md bg-[#6254d8] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#7164e5]">
                    View
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Saved;