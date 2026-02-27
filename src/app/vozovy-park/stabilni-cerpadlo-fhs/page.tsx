import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Stabilní čerpadlo FHS | Vozový park AD Podlahy",
  description: "Výkonné stabilní čerpadlo FHS s objemem 12 m³ a dosahem 17 metrů pro rychlé, bezpečné a přesné čerpání betonu na menších a středně velkých stavbách. Moderní technika AD Podlahy zajišťuje efektivní realizaci projektů.",
  keywords: [
    "Stabilní čerpadlo FHS",
    "čerpadlo na beton 17 m",
    "MAN čerpadlo beton",
    "vozový park AD Podlahy",
    "čerpadlo na beton Praha a okolí",
    "stavební technika AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/vozovy-park/stabilni-cerpadlo-fhs",
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
    title: "Stabilní čerpadlo FHS | AD Podlahy",
    description: "Profesionální stabilní čerpadlo FHS s objemem 12 m³ a dosahem 17 m pro efektivní a přesné čerpání betonu na stavbách všech typů.",
    url: "https://www.adpodlahy.cz/vozovy-park/stabilni-cerpadlo-fhs",
    images: [
      {
        url: "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-14.avif",
        width: 1200,
        height: 630,
        alt: "Stabilní čerpadlo FHS - Vozový park AD Podlahy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stabilní čerpadlo FHS | AD Podlahy",
    description: "Moderní stabilní čerpadlo FHS s objemem 12 m³ a dosahem 17 metrů pro efektivní stavební projekty.",
    images: [
      "https://www.adpodlahy.cz/fota/sekce/vozovy-park/vozovy-park-14.avif"
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