import { Word } from "contentlayer/generated";

export type WordProperties = Pick<
  Word,
  "word" | "pos" | "pronunciation" | "definition" | "slug"
>;

export type WordWithBody = WordProperties & Pick<Word, "body">;
