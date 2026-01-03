import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UsersTable from "@/components/tables/UsersTable";
import { mockUsers } from "@/lib/data/mockData";

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        <p className="text-gray-600 mt-1">Manage your application users</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <UsersTable data={mockUsers} />
        </CardContent>
      </Card>
    </div>
  );
}