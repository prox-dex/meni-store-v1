import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: 'Products',
    description: 'Explore our wide range of innovative products designed to meet your needs and exceed your expectations.',
};

const products = [
  {
    id: 1,
    name: "Premium Accessories",
    description: "Discover our collection of high-quality accessories that combine style and functionality.",
    price: "$99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Essential Tools",
    description: "Professional-grade tools designed to enhance your productivity and streamline your workflow.",
    price: "$149",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Innovative Solutions",
    description: "Cutting-edge solutions that solve complex problems and drive meaningful results.",
    price: "$199",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
  },
];

const features = [
  {
    title: "Quality Assured",
    description: "Every product undergoes rigorous testing to ensure the highest standards of quality and reliability.",
  },
  {
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technology and forward-thinking design.",
  },
  {
    title: "Customer Support",
    description: "Our dedicated support team is always ready to help you get the most out of your purchase.",
  },
  {
    title: "Sustainable Design",
    description: "We're committed to creating products that are both high-performing and environmentally conscious.",
  },
];

export default function ProductsPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className={cn("py-8 sm:py-12 md:py-16 lg:py-24")}>
                <div className="container">
                    <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:gap-6 text-center">
                        <div className="mb-2 sm:mb-4 inline-flex items-center justify-center">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-primary">
                                Our Products
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight lg:text-6xl">
                            Products
                        </h1>
                        <p className="text-balance text-base sm:text-lg leading-relaxed text-muted-foreground lg:text-xl px-4 sm:px-0">
                            Explore our wide range of innovative products designed to meet your needs 
                            and exceed your expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className={cn("py-8 sm:py-12 md:py-16 lg:py-24")}>
                <div className="container">
                    <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
                        <div className="space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
                            <div className="flex items-center justify-center gap-2 sm:gap-3">
                                <Package className="size-5 sm:size-6 text-primary" />
                                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                                    Product Catalog
                                </h2>
                            </div>
                            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
                                Discover our carefully curated selection of premium products
                            </p>
                        </div>
                        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product) => (
                                <Card key={product.id} className="group flex flex-col border-border transition-all hover:shadow-lg py-0">
                                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <CardHeader className="space-y-2 p-4 sm:p-6">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-primary">
                                                {product.category}
                                            </span>
                                            <span className="text-base sm:text-lg font-semibold">{product.price}</span>
                                        </div>
                                        <CardTitle className="text-lg sm:text-xl md:text-2xl">{product.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-1 flex-col justify-between space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                                        <CardDescription className="text-sm sm:text-base leading-relaxed">
                                            {product.description}
                                        </CardDescription>
                                        <Button variant="outline" className="w-full text-sm sm:text-base">
                                            <ShoppingBag className="size-4" />
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={cn("border-y bg-muted/50 py-8 sm:py-12 md:py-16 lg:py-24")}>
                <div className="container">
                    <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
                        <div className="space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
                            <div className="flex items-center justify-center gap-2 sm:gap-3">
                                <Sparkles className="size-5 sm:size-6 text-primary" />
                                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                                    Why Choose Our Products
                                </h2>
                            </div>
                            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
                                What sets us apart from the rest
                            </p>
                        </div>
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
                            {features.map((feature, index) => (
                                <div key={index} className="space-y-2 sm:space-y-3 text-center">
                                    <h3 className="text-base sm:text-lg font-semibold">{feature.title}</h3>
                                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}