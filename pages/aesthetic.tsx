import { NextSeo } from "next-seo";
import Link from "next/link";
import { getPlaiceholder } from "plaiceholder";
import { BlurImage } from "~/components";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { css } from "~/styles";
import { container, stack, text } from "~/styles/primitives";

interface PageProps {
  images: {
    alt: string;
    blurDataURL: string;
    height: number;
    src: string;
    title: string;
    type: string;
    width: number;
  }[];
}

const Aesthetic = ({ images }: PageProps) => {
  return (
    <MainWrapper title="Aesthetic">
      <div
        className={container({
          size: "small",
          css: { my: "$4" },
        })}
      >
        <NextSeo title="Aesthetic" />
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "$10",
            img: {
              transitionDuration: "0.5s",
              transitionTimingFunction: "ease-in-out",
              borderRadius: "$lg",
              "&:hover": {
                willChange: "transform, filter, opacity",
                transform: "scale(1.05)",
                filter: "blur(2px) !important",
                opacity: 0.9,
              },
            },
            p: {
              fontSize: "$sm",
              pl: "$2",
            },
          })()}
        >
          {images.map((image, i) => (
            <a key={i} href={image.alt}>
              <BlurImage {...image} />
              <p className={text({})}>{image.title}</p>
            </a>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

Aesthetic.layout = attachMainLayout();

export const getStaticProps = async () => {
  const data: any = await import("public/aesthetic.json");

  const images = await Promise.all(
    data.images.map(async (image: any) => {
      const { base64, img } = await getPlaiceholder(image.src);

      return {
        ...img,
        alt: image.alt,
        title: image.title,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      images,
    },
  };
};

export default Aesthetic;
