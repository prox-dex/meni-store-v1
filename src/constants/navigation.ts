import { Settings, Home } from "lucide-react";

export const publicNavLinks = [
	{
		label: "Products",
		href: "/products",
	},
	{
		label: "About",
		href: "/about",
	},
];

import { NavItem } from "@/types/navigation";
export const adminNavLinks: NavItem[] = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: Home,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: Settings,
		isActive: true,
		items: [
			{
				title: "Users",
				url: "/settings/users",
			},
			{
				title: "Organizations",
				url: "/settings/organizations"
			}
		],
	},
];