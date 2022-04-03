import type { Note } from "contentlayer/generated";

export type NoteProperties = Pick<
  Note,
  "title" | "summary" | "publishedAt" | "path" | "slug"
>;

export type NoteWithBody = NoteProperties & Pick<Note, "body">;
