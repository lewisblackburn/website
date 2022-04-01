import type { Project } from "contentlayer/generated";
import type { IGetImageReturn } from "plaiceholder/dist/get-image";

type ImgReturn = Pick<IGetImageReturn, "img">;

export type BlurCover = {
  [key in keyof ImgReturn["img"]]: ImgReturn["img"][key];
} & {
  blurDataURL: string;
};

export type ProjectProperties = Pick<
  Project,
  "title" | "description" | "publishedAt" | "path" | "slug"
>;

export type ProjectWithBody = ProjectProperties & Pick<Project, "body">;

export type ProjectWithCover = ProjectProperties & {
  cover: BlurCover;
};

export type ProjectWithCoverAndBody = ProjectWithCover & Pick<Project, "body">;
