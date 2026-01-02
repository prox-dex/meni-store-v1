import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const DEFAULT_TITLE = "No Better App";
const DEFAULT_DESCRIPTION = "No Better App — Simple, fast, and secure.";

export const DEFAULT_METADATA: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: ["no better app", "products", "dashboard", "nextjs"],
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: DEFAULT_TITLE,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/og.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  if (!overrides) return DEFAULT_METADATA;

  const result: Metadata = {
    ...DEFAULT_METADATA,
    ...overrides,
  };

  if (overrides.openGraph) {
    result.openGraph = {
      ...(DEFAULT_METADATA.openGraph || {}),
      ...overrides.openGraph,
    } as Metadata["openGraph"];
  }

  if (overrides.twitter) {
    result.twitter = {
      ...(DEFAULT_METADATA.twitter || {}),
      ...overrides.twitter,
    } as Metadata["twitter"];
  }

  if (overrides.icons) {
    result.icons = overrides.icons as Metadata["icons"];
  }

  return result;
}
