import type { Metadata } from "next";
import { Nunito, Caesar_Dressing, Poppins, Bangers } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/views/footer/footer";


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
        <div className="w-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
