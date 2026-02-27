import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Volvo čerpadlo na beton 56 m | Vozový park AD Podlahy",
  description: "Výkonné Volvo čerpadlo na beton s dosahem 56 metrů pro rychlé, bezpečné a přesné čerpání betonu i na rozsáhlých a náročných stavbách. Moderní technika AD Podlahy pro efektivní realizaci projektů.",
  keywords: [
    "Volvo čerpadlo 56m",
    "čerpadlo na beton 56m",
    "Volvo čerpadlo na beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/volvo-cerpadlo-na-beton-56m",
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
    title: "Volvo čerpadlo na beton 56 m | AD Podlahy",
    description: "Profesionální čerpadlo na beton Volvo s dosahem 56 m pro efektivní a přesné čerpání betonu na velkých stavebních projektech.",
    url: "https://www.adpodlahy.cz/vozovy-park/volvo-cerpadlo-na-beton-56m",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-4.avif",
        width: 1200,
        height: 630,
        alt: "Volvo čerpadlo na beton 56 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Volvo čerpadlo na beton 56 m | AD Podlahy",
    description: "Moderní Volvo čerpadlo na beton s dosahem 56 metrů pro náročné stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-4.avif"
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