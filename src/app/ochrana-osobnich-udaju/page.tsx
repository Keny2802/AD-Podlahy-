import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Ochrana osobních údajů (GDPR) | AD Podlahy",
  description:
    "Informace o zpracování osobních údajů podle GDPR. Zjistěte, jak AD Podlahy chrání vaše osobní údaje, jaké údaje zpracováváme a jaká máte práva.",
  keywords: [
    "ochrana osobních údajů",
    "GDPR AD Podlahy",
    "zpracování osobních údajů",
    "zásady ochrany osobních údajů",
    "AD Podlahy GDPR",
    "Adam Šimara ochrana údajů"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/ochrana-osobnich-udaju"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ochrana osobních údajů (GDPR) | AD Podlahy",
    description:
      "Zásady ochrany osobních údajů společnosti AD Podlahy. Informace o tom, jak zpracováváme a chráníme vaše osobní údaje.",
    url: "https://www.adpodlahy.cz/ochrana-osobnich-udaju",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ochrana osobních údajů | AD Podlahy",
    description:
      "Zásady ochrany osobních údajů a informace o zpracování dat podle GDPR."
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