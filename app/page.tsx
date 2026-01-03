import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold">NovaDash Kit</h1>
            <div className="flex gap-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Modern SaaS Dashboard
            <span className="block text-blue-600 mt-2">
              Built for Performance
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A professional, production-ready dashboard template with beautiful
            charts, data tables, and modern UI components. Start building your
            SaaS today.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              description: "Beautiful charts and data visualization",
            },
            {
              icon: Users,
              title: "User Management",
              description: "Complete user administration system",
            },
            {
              icon: TrendingUp,
              title: "Real-time Data",
              description: "Live updates and metrics tracking",
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              description: "Built with security best practices",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
