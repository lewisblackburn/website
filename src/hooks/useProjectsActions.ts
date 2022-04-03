import { allProjects, Project } from "contentlayer/generated";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/router";
import * as React from "react";

const searchId = randomId();

export default function useProjetsActions() {
  const router = useRouter();

  const searchActions = React.useMemo(() => {
    let actions: any = [];

    const collectProjects = (tree: any) => {
      Object.keys(tree).forEach((key) => {
        const project: Project = tree[key];
        if (project) {
          actions.push({
            id: randomId(),
            parent: searchId,
            name: project.title,
            shortcut: [],
            keywords: "projects",
            section: "Go To",
            perform: () => router.push(`/project/${project.slug}`),
          });
        }
      });

      return actions;
    };

    return collectProjects(allProjects);
  }, [router]);

  const rootSearchAction = React.useMemo(
    () =>
      searchActions.length
        ? {
            id: searchId,
            name: "Search projects…",
            shortcut: [">"],
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
