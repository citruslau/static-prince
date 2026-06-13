import { ChartPie, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Stocked In",
    value: "4,200",
    change: "+4%",
    trend: "up" as const,
    bgColor: "bg-blue-bg",
    iconColor: "text-blue-fill",
    Icon: TrendingUp,
  },
  {
    label: "Stocked Out",
    value: "4,200",
    change: "-4%",
    trend: "down" as const,
    bgColor: "bg-red-fill/10",
    iconColor: "text-red-fill",
    Icon: TrendingDown,
  },
  {
    label: "Suppliers",
    value: "15",
    change: "",
    trend: "up" as const,
    bgColor: "bg-purple-bg",
    iconColor: "text-purple-fill",
    Icon: ChartPie,
  },
  {
    label: "Customers",
    value: "15",
    change: "",
    trend: "up" as const,
    bgColor: "bg-green-fill/10",
    iconColor: "text-green-fill",
    Icon: ChartPie,
  },
];

export default function DashboardPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2>Dashboard</h2>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bgColor} rounded-xl p-6 flex flex-col gap-3`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-saltbox-gray">{stat.label}</span>
              <stat.Icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-custom-black">{stat.value}</span>
              {stat.change && (
                <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-fill" : "text-red-fill"}`}>
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-bellflower-gray">
          <h4 className="mb-4">Stock Overview</h4>
          <div className="h-48 flex items-center justify-center text-vesper-gray border border-dashed border-bellflower-gray rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <ChartPie className="w-12 h-12 opacity-30" />
              <span className="text-sm">Chart placeholder</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-bellflower-gray">
          <h4 className="mb-4">Top Suppliers</h4>
          <div className="space-y-3">
            {["ABC Supplies Co.", "Philippine School Supplies Inc.", "National Bookstore Trading"].map((name, i) => (
              <div key={name} className="flex items-center justify-between py-2 border-b border-bellflower-gray last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-vesper-gray w-5">{i + 1}.</span>
                  <span className="text-sm font-medium text-custom-black">{name}</span>
                </div>
                <span className="text-xs text-blouse-gray">PHP {(150000 - i * 25000).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
