import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Mercedes čerpadlo na beton 40 m | Vozový park AD Podlahy",
  description: "Moderní Mercedes čerpadlo na beton s dosahem 40 metrů pro efektivní a přesné čerpání betonu. Profesionální technika AD Podlahy pro rychlou a kvalitní realizaci staveb.",
  keywords: [
    "Mercedes čerpadlo 40m",
    "čerpadlo na beton 40m",
    "Mercedes čerpadlo na beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-na-beton-40m",
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
    title: "Mercedes čerpadlo na beton 40 m | AD Podlahy",
    description: "Výkonné čerpadlo na beton Mercedes s dosahem 40 m pro přesné a rychlé čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-na-beton-40m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-2.avif",
        width: 1200,
        height: 630,
        alt: "Mercedes čerpadlo na beton 40 m - AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes čerpadlo na beton 40 m | AD Podlahy",
    description: "Profesionální čerpadlo na beton Mercedes s dosahem 40 metrů pro efektivní stavební práce.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-2.avif"
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