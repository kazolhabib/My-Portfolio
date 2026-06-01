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
  title: "Kazol Habib | Full-Stack Developer & Webflow Expert",
  description: "Personal portfolio of Kazol Habib, an elite Full-Stack Developer and Webflow Expert specializing in building modern, high-performance, and visually stunning web experiences.",
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
