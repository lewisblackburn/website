import { NextSeo } from "next-seo";
import useSWR from "swr";
import CommitCard from "~/components/CommitCard";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { fetcher } from "~/lib/fetcher";
import { container } from "~/styles/primitives";
import { Commit, CommitWrapper } from "~/types/github.type";

interface PageProps {
  commits: CommitWrapper[];
}

const Changelog = ({}: PageProps) => {
  const { data: commits } = useSWR<CommitWrapper[]>(
    "/api/github/commits",
    fetcher
  );

  return (
    <MainWrapper title="Changelog">
      <div
        className={container({
          size: "small",
          css: { my: "$4" },
        })}
      >
        <NextSeo title="Changelog" />
        {commits?.map((commit) => (
          <CommitCard
            key={commit.node_id}
            message={commit.commit.message}
            name={commit.commit.comment_count}
            date={commit.commit.author.date}
            href={commit.html_url}
          />
        ))}
      </div>
    </MainWrapper>
  );
};

Changelog.layout = attachMainLayout();

export default Changelog;
