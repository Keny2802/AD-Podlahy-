import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Zemní práce - výkopy, terénní úpravy a příprava stavby | AD Podlahy",
  description: "Profesionální zemní práce pro rodinné domy, haly i rekonstrukce. Výkopy, terénní úpravy, odstranění ornice a příprava stavby pro další realizace. AD Podlahy - spolehlivě a kvalitně.",
  keywords: [
    "zemní práce cena",
    "výkopy pro rodinné domy",
    "terénní úpravy staveb",
    "příprava stavby",
    "odstranění ornice",
    "zemní práce haly",
    "bagrování výkopy",
    "zemní práce na klíč",
    "AD Podlahy",
    "Adam Šimara"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/sluzby/zemni-prace"
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
    title: "Zemní práce pro stavby | AD Podlahy",
    description: "Kompletní zemní práce včetně výkopů, terénních úprav a přípravy stavby pro rodinné domy i průmyslové objekty. Kvalitní a spolehlivé služby od AD Podlahy.",
    url: "https://www.adpodlahy.cz/sluzby/zemni-prace",
    images: [
      {
        url: "/fota/galerie/foto-galerie-1.avif",
        type: "image/avif",
        width: 1200,
        height: 630,
        alt: "Zemní práce - AD Podlahy Adam Šimara"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemní práce | AD Podlahy",
    description: "Výkopy, terénní úpravy a příprava stavby pro rodinné domy i haly. Profesionální zemní práce od AD Podlahy.",
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