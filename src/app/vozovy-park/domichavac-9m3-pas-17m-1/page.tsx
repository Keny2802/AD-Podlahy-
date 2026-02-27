import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "MAN domíchávač 9 m³ - 17 m | Vozový park AD Podlahy",
  description: "Výkonný MAN domíchávač betonu s objemem 9 m³ a dosahem 17 metrů pro rychlé, bezpečné a přesné čerpání betonu na menších a středně velkých stavbách. Moderní technika AD Podlahy pro efektivní realizaci projektů.",
  keywords: [
    "MAN domíchávač 9 m³",
    "čerpadlo na beton 17 m",
    "MAN čerpadlo beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/domichavac-9m3-pas-17m-1",
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
    title: "MAN domíchávač 9 m³ - 17 m | AD Podlahy",
    description: "Profesionální MAN domíchávač betonu s objemem 9 m³ a dosahem 17 m pro efektivní a přesné čerpání betonu na stavbách.",
    url: "https://www.adpodlahy.cz/vozovy-park/domichavac-9m3-pas-17m-1",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-9.avif",
        width: 1200,
        height: 630,
        alt: "MAN domíchávač 9 m³ - 17 m - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MAN domíchávač 9 m³ - 17 m | AD Podlahy",
    description: "Moderní MAN domíchávač betonu s objemem 9 m³ a dosahem 17 metrů pro efektivní stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-9.avif"
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