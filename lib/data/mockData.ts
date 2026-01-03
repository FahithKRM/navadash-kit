import { User, DashboardStats, RevenueData, UserGrowthData, Activity } from '@/types';

export const dashboardStats: DashboardStats = {
  totalRevenue: 45231.89,
  totalUsers: 2350,
  activeUsers: 1893,
  conversionRate: 3.2,
  revenueChange: 20.1,
  usersChange: 15.3,
  activeChange: 8.7,
  conversionChange: -2.4,
};

export const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 12000, expenses: 8000 },
  { month: 'Feb', revenue: 15000, expenses: 9000 },
  { month: 'Mar', revenue: 18000, expenses: 9500 },
  { month: 'Apr', revenue: 22000, expenses: 10000 },
  { month: 'May', revenue: 25000, expenses: 11000 },
  { month: 'Jun', revenue: 28000, expenses: 11500 },
  { month: 'Jul', revenue: 32000, expenses: 12000 },
  { month: 'Aug', revenue: 35000, expenses: 13000 },
  { month: 'Sep', revenue: 38000, expenses: 13500 },
  { month: 'Oct', revenue: 42000, expenses: 14000 },
  { month: 'Nov', revenue: 45000, expenses: 15000 },
  { month: 'Dec', revenue: 48000, expenses: 16000 },
];

export const userGrowthData: UserGrowthData[] = [
  { month: 'Jan', users: 400 },
  { month: 'Feb', users: 580 },
  { month: 'Mar', users: 820 },
  { month: 'Apr', users: 1100 },
  { month: 'May', users: 1380 },
  { month: 'Jun', users: 1650 },
  { month: 'Jul', users: 1900 },
  { month: 'Aug', users: 2100 },
  { month: 'Sep', users: 2250 },
  { month: 'Oct', users: 2350 },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    joinedAt: new Date('2024-02-20'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'manager',
    status: 'active',
    joinedAt: new Date('2024-03-10'),
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    role: 'user',
    status: 'inactive',
    joinedAt: new Date('2024-01-05'),
  },
  {
    id: '5',
    name: 'Tom Brown',
    email: 'tom@example.com',
    role: 'user',
    status: 'active',
    joinedAt: new Date('2024-04-12'),
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    user: 'John Doe',
    action: 'Made a purchase of $299',
    timestamp: new Date('2024-12-31T10:30:00'),
    type: 'purchase',
  },
  {
    id: '2',
    user: 'Jane Smith',
    action: 'Created a new account',
    timestamp: new Date('2024-12-31T09:15:00'),
    type: 'signup',
  },
  {
    id: '3',
    user: 'Mike Johnson',
    action: 'Updated profile settings',
    timestamp: new Date('2024-12-31T08:45:00'),
    type: 'update',
  },
  {
    id: '4',
    user: 'Sarah Williams',
    action: 'Deleted a project',
    timestamp: new Date('2024-12-30T16:20:00'),
    type: 'delete',
  },
  {
    id: '5',
    user: 'Tom Brown',
    action: 'Made a purchase of $149',
    timestamp: new Date('2024-12-30T14:10:00'),
    type: 'purchase',
  },
];