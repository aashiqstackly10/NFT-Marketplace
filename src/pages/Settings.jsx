import DashboardLayout from "../layouts/DashboardLayout";
import {
  User,
  Bell,
  Lock,
  Shield,
  Mail,
  Save,
} from "lucide-react";

function Settings() {
  return (
    <DashboardLayout title="Settings">
      <div className="text-white">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Settings
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account and application preferences.
          </p>
        </div>

        {/* Settings Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Profile Settings */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6">

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <User size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Profile Settings
                </h2>

                <p className="text-xs text-gray-500">
                  Update your personal information
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">

              <div>
                <label className="mb-2 block text-xs text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="Aashiq"
                  className="w-full rounded-lg border border-[#292342] bg-[#0f0d1b] px-4 py-3 text-sm text-white outline-none focus:border-[#6254d8]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-gray-400">
                  Username
                </label>

                <input
                  type="text"
                  defaultValue="@aashiq"
                  className="w-full rounded-lg border border-[#292342] bg-[#0f0d1b] px-4 py-3 text-sm text-white outline-none focus:border-[#6254d8]"
                />
              </div>

            </div>
          </div>

          {/* Email Settings */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6">

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Mail size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Email Settings
                </h2>

                <p className="text-xs text-gray-500">
                  Manage your email information
                </p>
              </div>
            </div>

            <div className="mt-6">

              <label className="mb-2 block text-xs text-gray-400">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="aashiq@example.com"
                className="w-full rounded-lg border border-[#292342] bg-[#0f0d1b] px-4 py-3 text-sm text-white outline-none focus:border-[#6254d8]"
              />

            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6">

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Bell size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Notifications
                </h2>

                <p className="text-xs text-gray-500">
                  Control your notifications
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">

              <label className="flex cursor-pointer items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">
                    Email Notifications
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Receive updates through email
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-[#6254d8]"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">
                    Bid Notifications
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Get notified about your bids
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-[#6254d8]"
                />
              </label>

            </div>
          </div>

          {/* Security */}
          <div className="rounded-xl border border-[#292342] bg-[#17132a] p-6">

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c3d] p-2.5">
                <Shield size={18} className="text-[#8175e8]" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Security
                </h2>

                <p className="text-xs text-gray-500">
                  Manage your account security
                </p>
              </div>
            </div>

            <div className="mt-6">

              <button className="flex w-full items-center gap-3 rounded-lg border border-[#292342] bg-[#0f0d1b] p-4 text-left transition hover:border-[#6254d8]">

                <Lock size={17} className="text-gray-500" />

                <div>
                  <p className="text-sm text-gray-300">
                    Change Password
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Update your account password
                  </p>
                </div>

              </button>

            </div>
          </div>

        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">

          <button className="flex items-center gap-2 rounded-lg bg-[#6254d8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#7164e5]">
            <Save size={17} />
            Save Changes
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;