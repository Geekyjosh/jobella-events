import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobella Events & More | Event Planning, Decoration & Styling in Lagos",
  description: "Jobella Events & More creates beautiful, memorable experiences through thoughtful event planning, elegant decoration and professional coordination in Lagos, Nigeria.",
  metadataBase: new URL("https://jobellaevents.pro"),
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: "Jobella Events & More", description: "Event planning, decoration and styling in Lagos, Nigeria." },
  openGraph: {
    title: "Jobella Events & More",
    description: "Beautifully planned. Unforgettable moments.",
    url: "https://jobellaevents.pro",
    siteName: "Jobella Events & More",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
