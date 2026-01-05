import type { Metadata } from "next";
import Script from "next/script";
import { Nunito, Caesar_Dressing, Poppins, Bangers } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/views/footer/footer";
import HeaderWrapper from "@/src/components/views/header/header-wrapper";
import BackToTopButton from "@/src/components/others-ui/back-to-top";


const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const caesarDressing = Caesar_Dressing({
  variable: "--font-caesar-dressing",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medev",
  description: "Medev is a platform that helps developers to build their projects faster and easier.",
  icons: {
    icon: "/assets/logo-medev-drk.svg",
    shortcut: "/assets/logo-medev-drk.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${nunitoSans.variable} ${caesarDressing.variable} ${poppins.variable} ${bangers.variable} antialiased m-0 px-0`}
      >
        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}`} strategy="lazyOnload" />
        <div className="w-full min-h-screen flex flex-col">
          <HeaderWrapper />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
