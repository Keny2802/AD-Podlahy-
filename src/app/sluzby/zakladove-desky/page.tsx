import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Základové desky - realizace na míru pro domy a haly | AD Podlahy",
  description: "Realizace základových desek pro rodinné domy, haly a stavby. Zemní práce, betonáž, armování a kompletní provedení. AD Podlahy - spolehlivě a kvalitně.",
  keywords: [
    "základové desky cena",
    "základová deska rodinný dům",
    "betonová základová deska",
    "základová deska na klíč",
    "základová deska hala",
    "armovaná základová deska",
    "zemní práce základová deska",
    "betonáž základů",
    "realizace základových desek",
    "AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/sluzby/zakladove-desky"
  },
  icons: {
    icon: [
      {
        url: "/fota/logo/logo.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  openGraph: {
    title: "Základové desky na klíč | AD Podlahy",
    description: "Kompletní realizace základových desek včetně zemních prací, armování a betonáže. Kvalitní základy pro rodinné domy i průmyslové stavby.",
    url: "https://www.adpodlahy.cz/sluzby/zakladove-desky",
    images: [
      {
        url: "/fota/galerie/foto-galerie-1.avif",
        type: "image/avif",
        width: 1200,
        height: 630,
        alt: "Základové desky - AD Podlahy Adam Šimara"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Základové desky | AD Podlahy",
    description:
      "Realizace základových desek na míru pro rodinné domy a haly. Kompletní provedení od výkopu po betonáž.",
    images: ["https://www.adpodlahy.cz/fota/galerie/foto-galerie-zakladova-deska.avif"]
  }
};

const Page = () => {
    return (
        <Fragment>
            <Content key={1} />
        </Fragment>
    );
};

export default Page;