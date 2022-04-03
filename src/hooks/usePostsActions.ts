import { allBlogs, Blog } from "contentlayer/generated";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/router";
import * as React from "react";

const searchId = randomId();

export default function usePostsActions() {
  const router = useRouter();

  const searchActions = React.useMemo(() => {
    let actions: any = [];

    const collectPosts = (tree: any) => {
      Object.keys(tree).forEach((key) => {
        const post: Blog = tree[key];
        if (post) {
          actions.push({
            id: randomId(),
            parent: searchId,
            name: post.title,
            shortcut: [],
            keywords: "blog posts",
            section: "Go To",
            perform: () => router.push(`/blog/${post.slug}`),
          });
        }
      });

      return actions;
    };

    return collectPosts(allBlogs);
  }, [router]);

  const rootSearchAction = React.useMemo(
    () =>
      searchActions.length
        ? {
            id: searchId,
            name: "Search blog…",
            shortcut: ["<"],
            keywords: "find",
            section: "Go To",
          }
        : null,
    [searchActions]
  );

  useRegisterActions([rootSearchAction, ...searchActions].filter(Boolean));
}

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}
