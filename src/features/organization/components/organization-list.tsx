"use client"

import { useState } from "react"
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
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { OrganizationForm } from "@/features/organization/components/organization-form"
import { toast } from "sonner"

export function OrganizationList() {
  const {data, isLoading, error, refetch} = useOrganizations();
  const [open, setOpen] = useState(false)

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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="size-4" />
              Add Organization
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Add Organization</SheetTitle>
              <SheetDescription>Create a new organization</SheetDescription>
            </SheetHeader>

            <div className="p-4">
              <OrganizationForm
                onCancel={() => setOpen(false)}
                onSuccess={(org) => {
                  toast.success(`Organization created - ${org.name}`);
                  setOpen(false);
                  refetch();
                }}
              />
            </div>
          </SheetContent>
        </Sheet>
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