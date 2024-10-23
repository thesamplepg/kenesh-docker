import { Inter, Montserrat, Open_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mont",
});

export const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open",
});

export const fonts = [
  inter.variable,
  montserrat.variable,
  openSans.variable,
].join(" ");
