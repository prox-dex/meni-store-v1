import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
    title: "No Better App",
    description: "Welcome to No Better App",
};

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
                className="flex-1 px-4 py-8 md:px-8"
            >
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}