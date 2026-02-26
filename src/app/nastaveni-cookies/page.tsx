import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Nastavení cookies | AD Podlahy",
  description:
    "Informace o používání cookies na webu AD Podlahy. Zjistěte, jaké typy cookies používáme a jak můžete upravit nebo odvolat svůj souhlas.",
  keywords: [
    "nastavení cookies",
    "zásady cookies",
    "cookies AD Podlahy",
    "správa cookies",
    "GDPR cookies",
    "AD Podlahy cookies"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/nastaveni-cookies"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nastavení cookies | AD Podlahy",
    description:
      "Zásady používání cookies a možnosti správy souhlasu na webu AD Podlahy.",
    url: "https://www.adpodlahy.cz/nastaveni-cookies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nastavení cookies | AD Podlahy",
    description:
      "Informace o používání a správě cookies na webu AD Podlahy."
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