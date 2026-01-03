import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/charts/RevenueChart";
import UserGrowthChart from "@/components/charts/UserGrowthChart";
import { DollarSign, Users, Activity, TrendingUp } from "lucide-react";
import { dashboardStats } from "@/lib/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { recentActivities } from "@/lib/data/mockData";
import { formatDistanceToNow } from "date-fns";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`$${dashboardStats.totalRevenue.toLocaleString()}`}
          change={dashboardStats.revenueChange}
          icon={DollarSign}
        />
        <StatsCard
          title="Total Users"
          value={dashboardStats.totalUsers.toLocaleString()}
          change={dashboardStats.usersChange}
          icon={Users}
        />
        <StatsCard
          title="Active Users"
          value={dashboardStats.activeUsers.toLocaleString()}
          change={dashboardStats.activeChange}
          icon={Activity}
        />
        <StatsCard
          title="Conversion Rate"
          value={`${dashboardStats.conversionRate}%`}
          change={dashboardStats.conversionChange}
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <UserGrowthChart />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <Badge
                    variant={
                      activity.type === 'purchase' ? 'default' :
                      activity.type === 'signup' ? 'secondary' :
                      activity.type === 'update' ? 'outline' : 'destructive'
                    }
                  >
                    {activity.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}