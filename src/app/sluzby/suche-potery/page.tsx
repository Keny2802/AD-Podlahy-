import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Suché potěry - montáž na míru, rychlá realizace | AD Podlahy",
  description: "Profesionální suché potěry pro rodinné domy, byty i rekonstrukce. Rychlá montáž bez schnutí, ideální pro podlahové topení. AD Podlahy - kvalitně a spolehlivě.",
  keywords: [
    "suché potěry cena",
    "suchý potěr podlahy",
    "suchý potěr rodinný dům",
    "suchý potěr rekonstrukce",
    "anhydrit suchý potěr",
    "suchý potěr podlahové topení",
    "suché podlahy",
    "podlahové systémy suché",
    "montáž suchých potěrů",
    "rychlá podlaha bez schnutí",
    "AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/sluzby/suche-potery"
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
    title: "Suché potěry - rychlá montáž podlah | AD Podlahy",
    description: "Dovoz a čerpání betonových směsí včetně realizace kvalitních litých podlah. Spolehlivě, rychle a profesionálně. AD podlahy - spolehlivé řešení pro domy i průmysl.",
    url: "https://www.adpodlahy.cz/sluzby/suche-potery",
    images: [
      {
        url: "/fota/galerie/foto-galerie-1.avif",
        type: "image/avif",
        width: 1200,
        height: 630,
        alt: "Suché potěry - AD Podlahy Adam Šimara"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suché potěry | AD Podlahy",
    description: "Montáž suchých potěrů bez čekání na schnutí. Ideální řešení pro rekonstrukce i novostavby.",
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