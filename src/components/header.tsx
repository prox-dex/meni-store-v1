"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { useRouter } from "next/navigation";
import { publicNavLinks } from "@/config/navigation";
import Link from "next/link";

export function Header() {
	const router = useRouter();
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
				{
					"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<Link className="rounded-md p-2 hover:bg-accent" href="/">
					<Logo className="h-4.5" />
				</Link>
				<div className="hidden items-center gap-1 md:flex">
					{publicNavLinks.map((link, i) => (
						<Link
							className={buttonVariants({ variant: "ghost" })}
							href={link.href}
							key={i}
						>
							{link.label}
						</Link>
					))}
					<Button
						variant="outline" 
						onClick={()=> router.push('/sign-in')}
					>
						Sign In
					</Button>
					<Button>Download Price list</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
