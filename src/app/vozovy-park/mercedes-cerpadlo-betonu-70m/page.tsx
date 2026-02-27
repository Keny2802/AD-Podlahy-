import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Mercedes čerpadlo betonu 70 m | Vozový park AD Podlahy",
  description: "Špičkové Mercedes čerpadlo betonu s dosahem 70 metrů pro rychlé, bezpečné a přesné čerpání betonu i na rozsáhlých a technicky náročných stavbách. Moderní technika AD Podlahy pro maximální efektivitu realizace.",
  keywords: [
    "Mercedes čerpadlo 70m",
    "čerpadlo na beton 70m",
    "Mercedes čerpadlo betonu",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-betonu-70m",
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
    title: "Mercedes čerpadlo betonu 70 m | AD Podlahy",
    description: "Profesionální Mercedes čerpadlo betonu s dosahem 70 m pro efektivní a přesné čerpání betonu na velkých stavebních projektech.",
    url: "https://www.adpodlahy.cz/vozovy-park/mercedes-cerpadlo-betonu-70m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-5.avif",
        width: 1200,
        height: 630,
        alt: "Mercedes čerpadlo betonu 70 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes čerpadlo betonu 70 m | AD Podlahy",
    description: "Moderní Mercedes čerpadlo betonu s dosahem 70 metrů pro náročné stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-5.avif"
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