"use client"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useOrganizations } from "@/features/organization/hooks/use-organizations"

export function OrganizationList() {
  const {data, isLoading, error} = useOrganizations();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-destructive">{error.message}</div>
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-6 md:p-6 md:pt-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground mt-2">
            Manage organizations and their configurations
          </p>
        </div>
        <Button>
          <Plus className="size-4" />
          Add Organization
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Organizations</CardTitle>
          <CardDescription>
            A list of all organizations in your system including their name, slug,
            and creation date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}