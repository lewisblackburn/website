import { allProjects } from "contentlayer/generated";
import { useKBar } from "kbar";
import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useMemo } from "react";
import CountUp from "react-countup";
import useSWR from "swr";
import { ProjectCard } from "~/components/project";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { dateToAge } from "~/lib/dateToAge";
import { fetcher } from "~/lib/fetcher";
import { container, stack } from "~/styles/primitives";
import { LastFM } from "~/types/lastfm.type";
import { ProjectProperties } from "~/types/project.type";

interface PageProps {
  projects: ProjectProperties[];
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const projects = allProjects.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });

  return { props: { projects } };
};

const Index = ({ projects }: PageProps) => {
  const dob = useMemo(() => dateToAge(new Date("2004-04-14")), []);
  const { data: lastFM } = useSWR<LastFM>("/api/scrobbles", fetcher);

  return (
    <MainWrapper>
      <div
        className={container({
          size: "small",
          css: { my: "$4" },
        })}
      >
        <NextSeo title="Home" />
        <div
          className={stack({
            dir: "col",
            css: {
              mb: "$12",
              gridGap: "20px",
            },
          })}
        >
          <p>
            Hey, {"I'm"} Lewis J.A Blackburn. {"I'm"} a ~
            <CountUp
              onEnd={(p) => {
                p.update(dateToAge(new Date("2004-04-14")));
              }}
              duration={5}
              decimals={9}
              // Prevent the count from taking too long to get to age
              start={global.document && dob - 0.0001}
              end={dob}
            />
          </p>
          <p>
            year old software developer from the United Kingdom, {"I'm"}{" "}
            interested in full-stack web development focusing on large scale
            type-safe graphql applications.
          </p>
          <p>
            A fun fact about me is that my favourite TV shows are the ones that
            tell you when to laugh! Apart from being a full-time comedian,{" "}
            {"I'm"} creating an entertainment database app in my freetime. It
            aims to be a user-maintained place to share movies, shows, books,
            music and people.
          </p>
          <p>
            {"I've"} listened to{" "}
            {lastFM?.user.playcount
              .toString()
              .replace(/\d+/g, (x) => x.replace(/(\d)(?=(\d{3})+$)/g, "$1,")) ??
              "00,000"}{" "}
            songs since 21 Sep 2020. {"That's"} about {""}
            {lastFM?.user.playcount
              ? Math.floor(
                  (lastFM?.user?.playcount /
                    (new Date().getTime() - new Date("2020-09-21").getTime())) *
                    24 *
                    60 *
                    60 *
                    1000
                )
              : "00"}{" "}
            songs a day.
          </p>
        </div>
        <div
          className={stack({
            dir: "col",
            css: {
              gap: "$4",
            },
          })}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

Index.layout = attachMainLayout();

export default Index;
