import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

export const redaction = localFont({
  src: "./fonts/redaction/Redaction50-Regular.woff2",
  variable: "--font-redaction",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

export const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  weight: ["300", "900"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});
