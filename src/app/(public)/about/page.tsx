import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Lightbulb, 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Heart,
  CheckCircle2,
  Globe,
  Zap
} from "lucide-react";

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company, mission, and the team behind our innovative solutions.',
};

const stats = [
  {
    value: "500+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "4.9",
    label: "Average Rating",
    icon: Award,
  },
  {
    value: "50+",
    label: "Projects Delivered",
    icon: CheckCircle2,
  },
  {
    value: "10+",
    label: "Countries Served",
    icon: Globe,
  },
];

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to deliver cutting-edge solutions that solve real-world problems.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description: "Every product and service we deliver meets the highest standards of excellence and reliability.",
    icon: Award,
  },
  {
    title: "Customer Focus",
    description: "Your success is our priority. We listen, adapt, and deliver solutions tailored to your needs.",
    icon: Heart,
  },
];

const achievements = [
  {
    title: "Industry Recognition",
    description: "Awarded for excellence in innovation and customer satisfaction",
  },
  {
    title: "Rapid Growth",
    description: "Consistently expanding our reach and impact year over year",
  },
  {
    title: "Trusted Partner",
    description: "Building long-term relationships with clients worldwide",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={cn("py-16 lg:py-24")}>
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl">
              About Us
            </h1>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground lg:text-xl">
              We are a dedicated team passionate about creating exceptional experiences 
              and delivering innovative solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={cn("border-y bg-muted/50 py-16 lg:py-20")}>
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 text-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-semibold lg:text-4xl">{stat.value}</div>
                      <div className="text-sm text-muted-foreground lg:text-base">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={cn("py-16 lg:py-24")}>
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="size-5 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  Our mission is to empower individuals and businesses with tools and services 
                  that enhance productivity, foster creativity, and drive meaningful progress. 
                  We believe in building solutions that are not just functional, but transformative.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  Through collaboration, innovation, and a commitment to excellence, we strive 
                  to be the trusted partner you can rely on for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={cn("border-y bg-muted/30 py-16 lg:py-24")}>
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Our Core Values
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-border transition-all hover:shadow-lg">
                    <CardHeader className="space-y-4">
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={cn("py-16 lg:py-24")}>
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="size-6 text-primary" />
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Our Achievements
                </h2>
              </div>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Milestones that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative space-y-3 rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Zap className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={cn("border-y bg-muted/50 py-16 lg:py-24")}>
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Users className="size-6 text-primary" />
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Our Team
                </h2>
              </div>
            </div>
            <div className="space-y-6 text-center">
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                We are a diverse group of talented individuals who bring unique perspectives 
                and expertise to every project. Together, we create an environment where 
                innovation thrives and excellence is the standard.
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                Our collaborative approach ensures that every voice is heard and every idea 
                is valued, resulting in solutions that truly make a difference.
              </p>
            </div>
            <Separator className="mx-auto max-w-2xl" />
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Join us in building the future. We&apos;re always looking for passionate individuals 
                who share our vision and values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}