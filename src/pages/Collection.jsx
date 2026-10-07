import DashboardLayout from "../layouts/DashboardLayout";
import { Folder, Heart, MoreHorizontal, Image } from "lucide-react";

import artwork1 from "../assets/images/artworks/artwork1.jpg";
import artwork2 from "../assets/images/artworks/artwork2.jpg";

const collections = [
  {
    id: 1,
    title: "My Favorites",
    description: "My favorite digital artworks",
    count: 24,
    image: artwork1,
  },
  {
    id: 2,
    title: "Modern Art",
    description: "Modern and creative artwork",
    count: 18,
    image: artwork2,
  },
  {
    id: 3,
    title: "Digital World",
    description: "A collection of digital creations",
    count: 32,
    image: artwork1,
  },
  {
    id: 4,
    title: "Creative Vision",
    description: "Unique creative artwork",
    count: 15,
    image: artwork2,
  },
  {
    id: 5,
    title: "Future Design",
    description: "Futuristic digital designs",
    count: 21,
    image: artwork1,
  },
  {
    id: 6,
    title: "Neon Collection",
    description: "Colorful neon artwork",
    count: 12,
    image: artwork2,
  },
];

function Collection() {
  return (
    <DashboardLayout title="Collection">
      <div className="text-white">

        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Collection
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Organize and manage your artwork collections.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-[#6254d8] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#7164e5]">
            <Folder size={16} />
            Create Collection
          </button>
        </div>

        {/* Collection Stats */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Folder size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Collections
                </p>

                <p className="mt-1 text-xl font-semibold">
                  6
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Image size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Total Artworks
                </p>

                <p className="mt-1 text-xl font-semibold">
                  122
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Heart size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Favorites
                </p>

                <p className="mt-1 text-xl font-semibold">
                  24
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {collections.map((collection) => (
            <div
              key={collection.id}
              className="overflow-hidden rounded-xl border border-[#292342] bg-[#17132a] transition duration-300 hover:-translate-y-1 hover:border-[#6254d8]"
            >

              {/* Collection Image */}
              <div className="relative h-48 overflow-hidden bg-[#111319]">

                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                  <Image size={13} className="text-gray-300" />

                  <span className="text-xs text-gray-300">
                    {collection.count} artworks
                  </span>
                </div>

                <button className="absolute right-3 top-3 rounded-lg bg-black/50 p-2 text-gray-300 backdrop-blur-sm transition hover:bg-[#6254d8] hover:text-white">
                  <MoreHorizontal size={17} />
                </button>

              </div>

              {/* Collection Details */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h2 className="text-base font-semibold text-white">
                      {collection.title}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {collection.description}
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#211c3d] p-2">
                    <Folder
                      size={16}
                      className="text-[#8175e8]"
                    />
                  </div>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6254d8] text-[10px] font-semibold">
                      A
                    </div>

                    <span className="text-xs text-gray-500">
                      Aashiq
                    </span>
                  </div>

                  <button className="rounded-lg bg-[#6254d8] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#7164e5]">
                    View Collection
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

export default Collection;