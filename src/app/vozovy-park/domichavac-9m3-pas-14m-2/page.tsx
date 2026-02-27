import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Mercedes domíchávač 9 m³ – 14 m | Vozový park AD Podlahy",
  description: "Výkonný Mercedes domíchávač betonu s objemem 9 m³ a dosahem 14 metrů pro rychlé, bezpečné a přesné čerpání betonu na menších a středně velkých stavbách. Moderní technika AD Podlahy pro efektivní realizaci projektů.",
  keywords: [
    "Mercedes domíchávač 9 m³",
    "čerpadlo na beton 14 m",
    "Mercedes čerpadlo beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/domichavac-9m3-pas-14m-2",
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
    title: "Mercedes domíchávač 9 m³ – 14 m | AD Podlahy",
    description: "Profesionální Mercedes domíchávač betonu s objemem 9 m³ a dosahem 14 m pro efektivní a přesné čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/domichavac-9m3-pas-14m-2",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-8-1.avif",
        width: 1200,
        height: 630,
        alt: "Mercedes domíchávač 9 m³ – 14 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes domíchávač 9 m³ – 14 m | AD Podlahy",
    description: "Moderní Mercedes domíchávač betonu s objemem 9 m³ a dosahem 14 metrů pro efektivní stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-8-1.avif"
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