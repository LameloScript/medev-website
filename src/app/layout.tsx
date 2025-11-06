import type { Metadata } from "next";
import { Nunito_Sans, Caesar_Dressing, Poppins, Bebas_Neue } from "next/font/google";
import "@/src/app/globals.css";
import Footer from "@/src/components/views/footer/footer";
import Header from "@/src/components/views/header/header";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
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

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
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
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${caesarDressing.variable} ${poppins.variable} ${bebasNeue.variable} antialiased m-0 p-0`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
