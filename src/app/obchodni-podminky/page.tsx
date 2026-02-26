import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adpodlahy.cz/"),
  title: "Obchodní podmínky | AD Podlahy",
  description:
    "Obchodní podmínky společnosti AD Podlahy. Informace o poskytování služeb, právech a povinnostech zákazníků a dodavatele.",
  keywords: [
    "obchodní podmínky",
    "obchodní podmínky AD Podlahy",
    "smluvní podmínky",
    "podmínky poskytování služeb",
    "AD Podlahy podmínky",
    "Adam Šimara obchodní podmínky"
  ],
  alternates: {
    canonical: "https://www.adpodlahy.cz/obchodni-podminky"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Obchodní podmínky | AD Podlahy",
    description:
      "Smluvní a obchodní podmínky společnosti AD Podlahy týkající se poskytování služeb.",
    url: "https://www.adpodlahy.cz/obchodni-podminky",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Obchodní podmínky | AD Podlahy",
    description:
      "Obchodní a smluvní podmínky společnosti AD Podlahy."
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