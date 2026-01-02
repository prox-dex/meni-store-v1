import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "Admin Dashboard", description: "Overview of metrics and recent activity for administrators.", openGraph: { url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/admin/dashboard` } });
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Users,
  Building2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - replace with actual data fetching
const stats = [
  {
    title: "Total Products",
    value: "1,234",
    change: "+12.5%",
    changeType: "increase" as const,
    icon: Package,
    description: "Active products",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Total Users",
    value: "856",
    change: "+8.2%",
    changeType: "increase" as const,
    icon: Users,
    description: "Registered users",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "Organizations",
    value: "42",
    change: "+3",
    changeType: "increase" as const,
    icon: Building2,
    description: "Active organizations",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "Low Stock Items",
    value: "23",
    change: "-5",
    changeType: "decrease" as const,
    icon: AlertTriangle,
    description: "Need restocking",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]

const revenueMetrics = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    changeType: "increase" as const,
    icon: DollarSign,
    period: "from last month",
  },
  {
    title: "Total Profit",
    value: "$12,450",
    change: "+15.3%",
    changeType: "increase" as const,
    icon: TrendingUp,
    period: "from last month",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8.2%",
    changeType: "increase" as const,
    icon: ShoppingCart,
    period: "this month",
  },
]

const recentProducts = [
  {
    id: "1",
    name: "Premium Widget",
    stock: 45,
    price: "$29.99",
    status: "active",
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    name: "Standard Widget",
    stock: 12,
    price: "$19.99",
    status: "low_stock",
    lastUpdated: "5 hours ago",
  },
  {
    id: "3",
    name: "Deluxe Widget",
    stock: 78,
    price: "$49.99",
    status: "active",
    lastUpdated: "1 day ago",
  },
  {
    id: "4",
    name: "Basic Widget",
    stock: 3,
    price: "$9.99",
    status: "low_stock",
    lastUpdated: "2 days ago",
  },
  {
    id: "5",
    name: "Pro Widget",
    stock: 120,
    price: "$79.99",
    status: "active",
    lastUpdated: "3 days ago",
  },
]

const quickActions = [
  {
    title: "Add Product",
    description: "Create a new product",
    href: "#",
    icon: Plus,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "View Orders",
    description: "Manage orders",
    href: "#",
    icon: ShoppingCart,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "Manage Users",
    description: "User settings",
    href: "/settings/users",
    icon: Users,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "Organizations",
    description: "Organization settings",
    href: "/settings/organizations",
    icon: Building2,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-6 md:p-6 md:pt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} ${stat.color} flex size-8 items-center justify-center rounded-lg`}>
                  <Icon className="size-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  {stat.changeType === "increase" ? (
                    <ArrowUpRight className="size-3 text-green-600" />
                  ) : (
                    <ArrowDownRight className="size-3 text-orange-600" />
                  )}
                  <span
                    className={
                      stat.changeType === "increase"
                        ? "text-green-600"
                        : "text-orange-600"
                    }
                  >
                    {stat.change}
                  </span>
                  <span> from last month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Revenue Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        {revenueMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  {metric.changeType === "increase" ? (
                    <TrendingUp className="size-3 text-green-600" />
                  ) : (
                    <TrendingDown className="size-3 text-red-600" />
                  )}
                  <span
                    className={
                      metric.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {metric.change}
                  </span>
                  <span> {metric.period}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Products */}
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Products</CardTitle>
                <CardDescription>
                  Latest products and their stock status
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/products">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "active"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {product.status === "active" ? "Active" : "Low Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {product.lastUpdated}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit product</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link key={action.title} href={action.href}>
                    <div className="group flex items-center gap-3 rounded-lg border p-3 transition-all hover:bg-accent hover:shadow-sm">
                      <div
                        className={`${action.bgColor} ${action.color} flex size-10 items-center justify-center rounded-lg`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {action.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {action.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest updates and changes in your system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "New product added",
                details: "Premium Widget was created",
                time: "2 hours ago",
                user: "John Doe",
              },
              {
                action: "Stock updated",
                details: "Standard Widget stock increased by 50",
                time: "5 hours ago",
                user: "Jane Smith",
              },
              {
                action: "User registered",
                details: "New user account created",
                time: "1 day ago",
                user: "System",
              },
              {
                action: "Organization created",
                details: "Acme Corp was added",
                time: "2 days ago",
                user: "Admin",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="bg-muted flex size-8 items-center justify-center rounded-full">
                  <Package className="size-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-muted-foreground">
                    {activity.details}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
