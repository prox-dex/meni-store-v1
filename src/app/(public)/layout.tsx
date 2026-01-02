import type { Metadata } from "next";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "No Better App" });

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main
                id="public-main"
                role="main"
                className="flex-1 px-4 md:px-8"
            >
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}