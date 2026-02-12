import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Navigation, type NavigationItem } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { buttonStyles } from "@/components/ui/button.styles";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "v0 UI Kit",
  description: "A production-ready Next.js design system / UI kit optimized for v0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks: NavigationItem[] = [
    { label: "Kitchen sink", href: "/kitchen-sink" },
    {
      label: "Templates",
      items: [
        { label: "Landing", href: "/template/landing" },
        { label: "Dashboard", href: "/template/dashboard" },
        { label: "Product", href: "/template/product" },
      ],
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-background text-foreground flex flex-col">
          <Navigation
            links={navLinks}
            cta={
              <Link
                href="/docs"
                className={buttonStyles({ variant: "primary", size: "sm" })}
              >
                Read Docs
              </Link>
            }
          />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
