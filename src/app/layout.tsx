import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-Archivo",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-Manrope",
  subsets: ["latin"],
});

const proximaNova = localFont({
  src: "../../public/fonts/proxima/proximanova-regular.otf",
  variable: "--font-proximanova-regular",
  display: "swap",
})

const proximaNovaBold = localFont({
  src: "../../public/fonts/proxima/proximanova-bold.otf",
  variable: "--font-proximanova-bold",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "FlexShop",
    template: "%s | FlexShop"
  },
  description: "Leading platform empowering social commerce in emerging markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${manrope.variable} ${proximaNova.variable} ${proximaNovaBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
