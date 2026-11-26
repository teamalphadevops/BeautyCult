import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite =
  repositoryName?.toLowerCase() ===
  `${process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase()}.github.io`;
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserSite
    ? `/${repositoryName}`
    : "";

const serif = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-serif", display: "swap" });
const sans = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: "Beauty Cult | Beauty Beyond Ordinary | Salon & Home Beauty Services in Redhills & Chennai",
  description:
    "Beauty Cult — Beauty Beyond Ordinary. Hair, skin, nails, makeup and wellness. We offer bridal makeup, hair styling, coloring, facials, manicure, pedicure, threading, waxing and hair spa at your doorstep in Redhills & Chennai. Call or WhatsApp +91 63791 18260.",
  keywords: [
    "home beauty services Chennai",
    "bridal makeup Redhills",
    "women's salon Chennai",
    "beauty parlour at home",
    "Beauty Cult",
  ],
};

export const viewport = {
  themeColor: "#7a0000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body
        style={{
          "--cursor": `url("${basePath}/cursor-brush.svg") 4 4, auto`,
          "--cursor-pointer": `url("${basePath}/cursor-brush-pointer.svg") 4 4, pointer`,
        }}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
