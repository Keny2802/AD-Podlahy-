import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Stříkaná izolace - spolehlivá hydroizolace střech a základů | AD Podlahy",
  description: "Profesionální stříkaná izolace pro střechy, střechy hal, sklepy a základové konstrukce. Rychlá aplikace, dokonalé utěsnění a dlouhá životnost. AD Podlahy - kvalitně a spolehlivě.",
  keywords: [
    "stříkaná izolace cena",
    "hydroizolace střech",
    "stříkaná izolace základů",
    "izolace hal",
    "stříkaná pěnová izolace",
    "střechy izolace",
    "hydroizolace sklep",
    "rychlá izolace stříkáním",
    "AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/sluzby/strikana-izolace"
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
    title: "Stříkaná izolace střech a základů | AD Podlahy",
    description: "Kompletní stříkaná izolace střech, hal, sklepů a základových konstrukcí. Rychlá aplikace, perfektní utěsnění a dlouhá životnost.",
    url: "https://www.adpodlahy.cz/sluzby/strikana-izolace",
    images: [
    {
        url: "https://www.adpodlahy.cz/fota/galerie/foto-galerie-1.avif",
        width: 1200,
        height: 630,
        alt: "Stříkaná izolace - AD Podlahy Adam Šimara"
    }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stříkaná izolace | AD Podlahy",
    description: "Rychlá a spolehlivá stříkaná izolace střech, hal a základů. Dokonalé utěsnění a dlouhá životnost.",
    images: [
        "https://www.adpodlahy.cz/fota/galerie/foto-galerie-1.avif"
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