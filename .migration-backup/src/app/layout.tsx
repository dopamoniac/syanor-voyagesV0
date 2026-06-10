import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/providers/QuoteContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syanorvoyages.com"),
  title:
    "SYANOR VOYAGES | Billets Avion, Bateau, Omra, Hajj & Séjours Sur Mesure",
  description:
    "SYANOR VOYAGES accompagne vos billets d'avion et de bateau, vos voyages Omra & Hajj, vos séjours organisés et vos voyages sur mesure avec un service premium.",
  keywords: [
    "syanor voyages",
    "omra",
    "hajj",
    "billets avion",
    "billets bateau",
    "ferry",
    "voyage spirituel",
    "séjour sur mesure",
    "agence voyage france",
  ],
  authors: [{ name: "SYANOR VOYAGES" }],
  openGraph: {
    title: "SYANOR VOYAGES | La Renaissance du Voyage",
    description:
      "Billets, voyages spirituels Omra & Hajj, séjours organisés et voyages sur mesure avec un service premium.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.syanorvoyages.com",
    siteName: "SYANOR VOYAGES",
  },
  robots: "index, follow",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#063F33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
