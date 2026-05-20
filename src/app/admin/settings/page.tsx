"use client";

import {
  Settings,
  Bell,
  Shield,
  Palette,
  Globe,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    title: "Appearance",
    icon: Palette,
    color: "bg-violet-500/15 text-violet-400",
    items: [
      { label: "Theme", value: "Dark", description: "Current UI theme" },
      { label: "Language", value: "Vietnamese", description: "Display language" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    color: "bg-blue-500/15 text-blue-400",
    items: [
      { label: "New orders", value: "Enabled", description: "Get notified on new orders" },
      { label: "Low stock alerts", value: "Enabled", description: "Notify when stock runs low" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    color: "bg-emerald-500/15 text-emerald-400",
    items: [
      { label: "Two-factor auth", value: "Disabled", description: "Add an extra layer of security" },
      { label: "Session timeout", value: "30 min", description: "Auto-logout after inactivity" },
    ],
  },
  {
    title: "Integrations",
    icon: Globe,
    color: "bg-[#c9a96e]/15 text-[#c9a96e]",
    items: [
      { label: "API Base URL", value: process.env.NEXT_PUBLIC_API_URL ?? "Not set", description: "Backend endpoint" },
    ],
  },
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Settings className="h-4 w-4 text-[#c9a96e]" />
          <span className="text-xs text-[#c9a96e] font-medium tracking-widest uppercase">
            Configuration
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Settings
        </h1>
        <p className="text-sm text-white/40 mt-0.5">
          Manage your admin console preferences
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl bg-gradient-to-br from-[#c9a96e]/10 to-[#a07840]/5 border border-[#c9a96e]/15 p-6 flex items-center gap-5">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#a07840] flex items-center justify-center text-xl font-bold text-black flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <p className="font-bold text-white text-base">Admin</p>
          <p className="text-sm text-white/40">admin@maison.vn</p>
          <span className="mt-1.5 inline-flex items-center rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/25 px-2.5 py-0.5 text-[11px] font-medium text-[#c9a96e]">
            Super Admin
          </span>
        </div>
        <button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors">
          Edit Profile
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
            >
              {/* Section header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.04]">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${section.color}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Items */}
              <div className="divide-y divide-white/[0.03]">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="text-sm text-white font-medium">
                        {item.label}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/40 font-medium">
                        {item.value}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-white/20 group-hover:text-white/50 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-red-500/10">
          <h2 className="text-sm font-semibold text-red-400">Danger Zone</h2>
          <p className="text-xs text-white/30 mt-0.5">
            Irreversible and destructive actions
          </p>
        </div>
        <div className="px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">Clear all sessions</p>
            <p className="text-xs text-white/30 mt-0.5">
              Force-logout all active admin sessions
            </p>
          </div>
          <button className="rounded-xl border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
            Clear Sessions
          </button>
        </div>
      </div>
    </div>
  );
}
