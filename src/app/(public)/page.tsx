import { Hero } from "@/components/hero";
import { Project1 } from "@/components/project1";
import { Testimonial } from "@/components/testimonial";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Discover innovative solutions and exceptional experiences designed to empower your success.',
  openGraph: { url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}` },
});

export default function HomePage() {
  return (
      <div>
        <Hero 
          heading="Innovative Solutions for Modern Challenges"
          description="We create exceptional experiences and deliver cutting-edge solutions that drive meaningful progress. Discover how we can help transform your vision into reality."
          button={{
            text: "Explore Our Products",
            url: "/products",
          }}
          reviews={{
            count: 500,
            rating: 4.9,
            avatars: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                alt: "Customer 1",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                alt: "Customer 2",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                alt: "Customer 3",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
                alt: "Customer 4",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
                alt: "Customer 5",
              },
            ],
          }}
        />
        <Project1 />
        <Testimonial 
          quote="Working with this team has been transformative. Their innovative approach and attention to detail have exceeded all our expectations. The solutions they deliver are not just functional—they're game-changing."
          author={{
            name: "Sarah Johnson",
            role: "CEO, Tech Innovations",
            avatar: {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
              alt: "Sarah Johnson",
            },
          }}
        />
      </div>
  );
}
