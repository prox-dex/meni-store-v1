"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, ExternalLink } from "lucide-react"
import { Organization } from "@/features/organization/types"

export const columns: ColumnDef<Organization>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const organization = row.original
      return (
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-lg border bg-muted">
            <div className="flex size-full items-center justify-center text-xs font-medium text-muted-foreground">
              {organization.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <div className="font-medium">{organization.name}</div>
            <div className="text-xs text-muted-foreground">{organization.slug}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="font-mono text-xs">
          {row.getValue("slug")}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const organization = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(organization.id)}
            >
              Copy organization ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4" />
              View organization
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit organization
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]