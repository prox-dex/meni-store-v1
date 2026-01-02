import Link from "next/link"
import { Users, Building2, Settings2, ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "Settings — Admin", description: "Manage users, organizations and application settings.", openGraph: { url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/admin/settings` } });

const settingsSections = [
  {
    title: "Users",
    description: "Manage user accounts, roles, and permissions",
    href: "/settings/users",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Organizations",
    description: "Configure organizations and their settings",
    href: "/settings/organizations",
    icon: Building2,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
]

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-6 md:p-6 md:pt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your application settings and configurations
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {settingsSections.map((section) => {
          const Icon = section.icon
          return (
            <Link key={section.href} href={section.href}>
              <Card className="group transition-all hover:shadow-md hover:border-primary/50 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`${section.bgColor} ${section.color} flex size-12 items-center justify-center rounded-lg`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{section.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                <Settings2 className="size-5 text-muted-foreground" />
              </div>
              <div>
                <CardTitle>Additional Settings</CardTitle>
                <CardDescription>
                  More configuration options coming soon
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

