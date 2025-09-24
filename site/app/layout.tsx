import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "sonner";
import CursorDot from "@/components/CursorDot";

// Fonts: Inter (body) and Space Grotesk (display)
// To swap display to Sora or Plus Jakarta Sans, replace Space_Grotesk import accordingly.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Display font swapped to Sora; keep variable name to avoid code changes
const spaceGrotesk = Sora({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Paul Jeon – Portfolio",
  description: "Designing colorful, user‑happy products.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Paul Jeon – Portfolio",
    description: "I craft playful interfaces that ship.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-foreground text-background px-3 py-2 rounded-md">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors position="top-center" />
          {/* small-change: theme-colored cursor */}
          <CursorDot />
        </ThemeProvider>
      </body>
    </html>
  );
}
