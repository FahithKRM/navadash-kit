import RevenueChart from "@/components/charts/RevenueChart";
import UserGrowthChart from "@/components/charts/UserGrowthChart";
import TrafficChart from "@/components/charts/TrafficChart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">
          Detailed insights into your business performance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <UserGrowthChart />
      </div>

      <TrafficChart />
    </div>
  );
}