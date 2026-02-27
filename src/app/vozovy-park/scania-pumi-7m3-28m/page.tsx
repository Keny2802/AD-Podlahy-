import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Scania Pumi 7 m³ - 28 m | Vozový park AD Podlahy",
  description: "Výkonné čerpadlo betonu Scania Pumi s objemem 7 m³ a dosahem 28 metrů pro rychlé, bezpečné a přesné čerpání betonu na menších i středně velkých stavbách. Moderní technika AD Podlahy pro efektivní realizaci projektů.",
  keywords: [
    "Scania Pumi 7 m³",
    "čerpadlo na beton 28 m",
    "Scania čerpadlo beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/scania-pumi-7m3-28m",
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
    title: "Scania Pumi 7 m³ - 28 m | AD Podlahy",
    description: "Profesionální Scania Pumi čerpadlo betonu s objemem 7 m³ a dosahem 28 m pro efektivní a přesné čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/scania-pumi-7m3-28m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-6.avif",
        width: 1200,
        height: 630,
        alt: "Scania Pumi 7 m³ - 28 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Scania Pumi 7 m³ - 28 m | AD Podlahy",
    description: "Moderní čerpadlo betonu Scania Pumi s objemem 7 m³ a dosahem 28 metrů pro efektivní stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-6.avif"
    ]
  }
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;