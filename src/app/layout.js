import { Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kazol Habib — Full-Stack Engineer & Webflow Specialist",
  description: "Crafting secure, high-performance web architectures with Next.js, robust RESTful backend APIs, and pixel-perfect custom Webflow interactions.",
  keywords: [
    "Kazol Habib",
    "Full-Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "Webflow Expert",
    "Software Engineer Portfolio",
    "MongoDB",
    "Express.js",
    "Better Auth"
  ],
  authors: [{ name: "Kazol Habib" }],
  creator: "Kazol Habib",
  metadataBase: new URL("https://github.com/kazolhabib"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kazol Habib — Full-Stack Engineer & Webflow Specialist",
    description: "Designing and engineering secure, high-performance web ecosystems, custom dashboard applications, and pixel-perfect visual interactions.",
    url: "https://github.com/kazolhabib",
    siteName: "Kazol Habib Portfolio",
    images: [
      {
        url: "/kazol-habib.png",
        width: 1200,
        height: 630,
        alt: "Kazol Habib — Full-Stack Engineer & Webflow Specialist"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazol Habib — Full-Stack Engineer & Webflow Specialist",
    description: "Designing and engineering secure, high-performance web ecosystems, custom dashboard applications, and pixel-perfect visual interactions.",
    images: ["/kazol-habib.png"],
    creator: "@kazolhabib",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
