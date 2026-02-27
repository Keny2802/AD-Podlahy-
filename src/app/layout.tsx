import type {
  Metadata
} from "next";
import "./globals.css";

import BarLoader from "./components/BarLoader";
import ScrollProgressBar from "./components/ScrollProgressBar";

export const metadata: Metadata = {
  // title: "AD Podlahy | Adam Šimara",
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Lité betonové podlahy a čerpání betonu | AD Podlahy | Adam Šimara",
  // description: "Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.",
  description: "AD Podlahy - dovoz a čerpání betonových směsí, realizace betonových podlah pro rodinné domy i průmyslové objekty. Kvalita, rychlost a spolehlivost.",
  keywords: [
    "lité podlahy",
    "betonové podlahy",
    "litá betonová podlaha",
    "čerpání betonu",
    "dovoz betonu",
    "betonové směsi",
    "realizace litých podlah",
    "strojní lití betonu",
    "průmyslové podlahy",
    "podlahy rodinné domy",
    "AD Podlahy",
    "Adam Šimara"
  ],
  icons: {
    icon: [
      {
        url: "/fota/logo/logo.ico",
        // sizes: "32x32",
        // type: "image/png",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  openGraph: {
    title: "Lití betonových podlah | AD Podlahy",
    description: "Dovoz a čerpání betonových směsí včetně realizace kvalitních litých podlah. Spolehlivě, rychle a profesionálně. AD podlahy - spolehlivé řešení pro domy i průmysl.",
    url: "https://www.adpodlahy.cz/",
    images: [
      {
        // url: "https://www.adpodlahy.cz/fota/galerie/foto-galerie-1.avif",
        url: "/fota/galerie/foto-galerie-1.avif",
        type: "image/avif",
        width: 1200,
        height: 630,
        alt: "Lité betonové podlahy - AD Podlahy Adam Šimara"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <BarLoader />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
