import { PathLike } from "fs";

export interface PostFrontMatter{
    title: string;
    metaTitle: string;
    metaDesc: string;
    socialImage: PathLike;
    altText: string;
    date: Date | string;
    tags: string[]
}