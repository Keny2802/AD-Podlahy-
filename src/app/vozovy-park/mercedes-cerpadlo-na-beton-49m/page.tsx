import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Mercedes čerpadlo na beton 49 m | Vozový park AD Podlahy",
  description: "Výkonné Mercedes čerpadlo na beton s dosahem 49 metrů pro rychlé, bezpečné a přesné čerpání betonu na stavbách všech typů. Moderní technika AD Podlahy pro efektivní realizaci projektů.",
  keywords: [
    "Mercedes čerpadlo 49m",
    "čerpadlo na beton 49m",
    "čerpadlo na beton Mercedes 49 m",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-na-beton-49m",
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
    title: "Mercedes čerpadlo na beton 49 m | AD Podlahy",
    description: "Profesionální čerpadlo na beton Mercedes s dosahem 49 m pro efektivní a přesné čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-na-beton-49m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-3.avif",
        width: 1200,
        height: 630,
        alt: "Mercedes čerpadlo na beton 49 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes čerpadlo na beton 49 m | AD Podlahy",
    description: "Moderní Mercedes čerpadlo na beton s dosahem 49 metrů pro náročné stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-3.avif"
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