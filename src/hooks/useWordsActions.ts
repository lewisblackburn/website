import { allWords, Word } from "contentlayer/generated";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/router";
import * as React from "react";

const searchId = randomId();

export default function useWordsActions() {
  const router = useRouter();

  const searchActions = React.useMemo(() => {
    let actions: any = [];

    const collectWords = (tree: any) => {
      Object.keys(tree).forEach((key) => {
        const word: Word = tree[key];
        if (word) {
          actions.push({
            id: randomId(),
            parent: searchId,
            name: word.word,
            shortcut: [],
            keywords: "words",
            section: "Go To",
            perform: () =>
              window.open(
                `https://www.dictionary.com/browse/${word.word}`,
                "_blank"
              ),
          });
        }
      });

      return actions;
    };

    return collectWords(allWords);
  }, [router]);

  const rootSearchAction = React.useMemo(
    () =>
      searchActions.length
        ? {
            id: searchId,
            name: "Search words…",
            shortcut: ["?"],
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
