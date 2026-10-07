import DashboardLayout from "../layouts/DashboardLayout";
import {
  Edit,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Folder,
  Gavel,
} from "lucide-react";

import profile1 from "../assets/images/profiles/profile1.jpg";
import profile2 from "../assets/images/profiles/profile2.jpg";

function Profile() {
  return (
    <DashboardLayout title="Profile">
      <div className="text-white">

        {/* Profile Header */}
        <div className="overflow-hidden rounded-2xl border border-[#292342] bg-[#17132a]">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-[#31266b] via-[#6254d8] to-[#21194d]" />

          <div className="px-6 pb-6 sm:px-8">

            <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              {/* Profile Information */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">

                {/* Profile Image */}
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-[#17132a] bg-[#6254d8]">
                  <img
                    src={profile1}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pb-1">
                  <h1 className="text-2xl font-semibold">
                    Aashiq
                  </h1>

                  <p className="mt-1 text-sm text-gray-500">
                    @aashiq
                  </p>
                </div>

              </div>

              {/* Edit Button */}
              <button className="flex w-fit items-center gap-2 rounded-lg bg-[#6254d8] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#7164e5]">
                <Edit size={16} />
                Edit Profile
              </button>

            </div>
          </div>
        </div>

        {/* Main Profile Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* About */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6 lg:col-span-2">

            <h2 className="text-lg font-semibold">
              About
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Welcome to my profile. I am interested in digital artwork,
              creative designs and online bidding.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Email */}
              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-[#211c3d] p-2.5">
                  <Mail size={17} className="text-[#8175e8]" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Email
                  </p>

                  <p className="text-sm text-gray-300">
                    aashiq@example.com
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-[#211c3d] p-2.5">
                  <MapPin size={17} className="text-[#8175e8]" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Location
                  </p>

                  <p className="text-sm text-gray-300">
                    India
                  </p>
                </div>

              </div>

              {/* Joined */}
              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-[#211c3d] p-2.5">
                  <Calendar size={17} className="text-[#8175e8]" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Joined
                  </p>

                  <p className="text-sm text-gray-300">
                    January 2026
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Statistics */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6">

            <h2 className="text-lg font-semibold">
              Statistics
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex items-center justify-between rounded-lg bg-[#1d1832] p-4">

                <div className="flex items-center gap-3">
                  <Heart size={18} className="text-[#8175e8]" />
                  <span className="text-sm text-gray-400">
                    Saved
                  </span>
                </div>

                <span className="font-semibold">
                  24
                </span>

              </div>

              <div className="flex items-center justify-between rounded-lg bg-[#1d1832] p-4">

                <div className="flex items-center gap-3">
                  <Folder size={18} className="text-[#8175e8]" />
                  <span className="text-sm text-gray-400">
                    Collections
                  </span>
                </div>

                <span className="font-semibold">
                  6
                </span>

              </div>

              <div className="flex items-center justify-between rounded-lg bg-[#1d1832] p-4">

                <div className="flex items-center gap-3">
                  <Gavel size={18} className="text-[#8175e8]" />
                  <span className="text-sm text-gray-400">
                    Bids
                  </span>
                </div>

                <span className="font-semibold">
                  18
                </span>

              </div>

            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 rounded-xl border border-[#292342] bg-[#17132a] p-6">

          <h2 className="text-lg font-semibold">
            Recent Activity
          </h2>

          <div className="mt-5 space-y-4">

            <div className="flex items-center justify-between border-b border-[#292342] pb-4">

              <div>
                <p className="text-sm text-gray-300">
                  Saved a new artwork
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Digital Vision
                </p>
              </div>

              <span className="text-xs text-gray-600">
                2 hours ago
              </span>

            </div>

            <div className="flex items-center justify-between border-b border-[#292342] pb-4">

              <div>
                <p className="text-sm text-gray-300">
                  Joined a collection
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Modern Art
                </p>
              </div>

              <span className="text-xs text-gray-600">
                Yesterday
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-300">
                  Placed a bid
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Future Design
                </p>
              </div>

              <span className="text-xs text-gray-600">
                3 days ago
              </span>

            </div>

          </div>
        </div>

        {/* Second Profile Image Preview */}
        <div className="mt-6 rounded-xl border border-[#292342] bg-[#17132a] p-6">

          <h2 className="text-lg font-semibold">
            Profile Gallery
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your profile images
          </p>

          <div className="mt-5 flex flex-wrap gap-5">

            <div className="h-32 w-32 overflow-hidden rounded-xl border border-[#292342]">
              <img
                src={profile1}
                alt="Profile 1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-32 w-32 overflow-hidden rounded-xl border border-[#292342]">
              <img
                src={profile2}
                alt="Profile 2"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;