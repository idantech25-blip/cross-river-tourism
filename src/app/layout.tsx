import type { Metadata } from "next";// Metadata type for SEO and social sharing
import "./globals.css";// Global CSS import

export const metadata: Metadata = {
  title: "Cross River State Tourism | Official Tourism Portal",
  description: "Official tourism portal of Cross River State Government. Discover Nigeria's premier destination with natural beauty, rich culture, and world-class attractions including Obudu Mountain Resort, Agbokim Waterfalls, and Calabar Carnival.",
  keywords: "Cross River State Government, Nigeria tourism, Calabar, Obudu Mountain Resort, Agbokim Waterfalls, Calabar Carnival, Cross River National Park, Marina Resort, official tourism",
  authors: [{ name: "Cross River State Government" }],
  openGraph: {
    title: "Cross River State Tourism | Official Tourism Portal",
    description: "Official tourism portal of Cross River State Government - Nigeria's premier destination.",
    type: "website",
    locale: "en_NG",
    url: "https://tourism.crossriverstate.gov.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
