import type { FC } from "react";
import React from "react";
import { randomDate } from "~/utils/date";
import { slugify } from "~/utils/utils";

interface Props {
  id: number;
  title: string;
}

const PostCard: FC<Props> = ({ id, title }) => {
  const link = `/blog/post/${id}/${slugify(title)}`;
  return (
    <article className="flex flex-col dark:bg-gray-900">
      <a
        rel="noopener noreferrer"
        href={link}
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt={title}
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={`https://source.unsplash.com/200x200/?fashion?${Math.floor(
            Math.random() * 40
          )}`}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="/blog/post"
          className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
        >
          Blog
        </a>
        <a href={link}>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {title}
          </h3>
        </a>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <span>{randomDate()}</span>
          <span>2.3K views</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
