export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  status: 'active' | 'inactive';
  avatar?: string;
  joinedAt: Date;
}

export interface DashboardStats {
  totalRevenue: number;
  totalUsers: number;
  activeUsers: number;
  conversionRate: number;
  revenueChange: number;
  usersChange: number;
  activeChange: number;
  conversionChange: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
  expenses: number;
}

export interface UserGrowthData {
  month: string;
  users: number;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  type: 'purchase' | 'signup' | 'update' | 'delete';
}