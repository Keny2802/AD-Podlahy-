import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Lité podlahy - výroba na míru, dovoz a realizace | AD Podlahy",
  description: "Profesionální lité betonové podlahy pro rodinné domy, haly i průmysl. Dovoz betonu, čerpání a realizace. AD Podlahy - rychle a kvalitně.",
  keywords: [
    "lité podlahy cena",
    "litá podlaha rodinný dům",
    "betonová podlaha garáž",
    "lité podlahy Morava",
    "lití betonu podlahy",
    "lité podlahy",
    "betonové podlahy",
    "litá betonová podlaha",
    "čerpání betonu",
    "dovoz betonu",
    "betonové směsi",
    "realizace litých podlah",
    "strojní lití betonu",
    "průmyslové podlahy",
    "podlahy rodinné domy",
    "AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/sluzby/lite-podlahy"
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
    title: "Suché potěry | AD Podlahy",
    description: "Dovoz a čerpání betonových směsí včetně realizace kvalitních litých podlah. Spolehlivě, rychle a profesionálně. AD podlahy - spolehlivé řešení pro domy i průmysl.",
    url: "https://www.adpodlahy.cz/sluzby/lite-podlahy",
    images: [
      {
        url: "/fota/galerie/foto-galerie-1.avif",
        type: "image/avif",
        width: 1200,
        height: 630,
        alt: "Lité betonové podlahy - AD Podlahy Adam Šimara"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lité betonové podlahy | AD Podlahy",
    description: "Profesionální realizace litých betonových podlah pro rodinné domy, haly i průmysl. Dovoz betonu a čerpání po celé ČR.",
    images: ["https://www.adpodlahy.cz/fota/galerie/foto-galerie-1.avif"]
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