import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Mercedes halové čerpadlo 24 m | Vozový park AD Podlahy",
  description: "Moderní Mercedes halové čerpadlo s dosahem 24 metrů pro efektivní a přesné čerpání betonu. Profesionální technika AD Podlahy pro rychlou a kvalitní realizaci staveb.",
  keywords: [
    "Mercedes čerpadlo 24m",
    "halové čerpadlo 24m",
    "čerpadlo na beton Mercedes",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/mercedes-halove-cerpadlo-24m"
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
    title: "Mercedes halové čerpadlo 24 m | AD Podlahy",
    description: "Výkonné halové čerpadlo Mercedes s dosahem 24 m pro přesné a rychlé čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/mercedes-halove-cerpadlo-24m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-1.avif",
        width: 1200,
        height: 630,
        alt: "Mercedes halové čerpadlo 24 m - AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes halové čerpadlo 24 m | AD Podlahy",
    description: "Profesionální halové čerpadlo Mercedes s dosahem 24 metrů pro efektivní stavební práce.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-1.avif"
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