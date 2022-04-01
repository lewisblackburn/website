import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Lewis Blackburn",
  defaultTitle: "Lewis Blackburn",
  description:
    "Hey, I'm Lewis a.k.a. zxffo. I'm a 17 year old software developer from the United Kingdom, I'm interested in full-stack web development focusing on large scale type-safe graphql applications.",
  canonical: "https://lew.sh",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lew.sh/",
    site_name: "Lewis Blackburn",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@zxffo",
    handle: "@zxffo",
  },
};

export default SEO;
