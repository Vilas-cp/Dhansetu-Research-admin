import { z } from "zod";

type Article = {
  id: number;
  uuid: string;
  artId: string;
  artHeading: string;
  artDetail: string;
  coverImgURL: string;
  artType: string;
};

export type { Article };
