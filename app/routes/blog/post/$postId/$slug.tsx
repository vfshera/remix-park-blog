import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { Link, useCatch, useLoaderData, useParams } from "@remix-run/react";
import React from "react";
import { randomDate } from "~/utils/date";
import { Posts } from "~/posts";
import { slugify } from "~/utils/utils";
import { SITE } from "~/constants/config";

export const loader = async ({
  params,
}: LoaderArgs): Promise<Post | undefined> => {
  const post = Posts.find((p) => slugify(p.title) === params.slug);

  if (!post) {
    throw new Response(`Post ${params.slug} Not Found`, {
      status: 404,
    });
  }

  return post;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: SITE.name + " | Blog Post",
      description: SITE.description,
    };
  }
  return {
    title: `${SITE.name} | ${data.title}`,
    description: data.title,
  };
};
const Post = () => {
  const post = useLoaderData<typeof loader>();

  return (
    <main id="PostPage" className="park-width">
      <a
        href="/"
        className="px-5 rounded-lg mt-20 w-max hover:bg-blue-600 py-1.5 bg-blue-500 text-white"
      >
        Back
      </a>
      <article className="mt-10">
        <div className="mb-4 md:mb-0 w-full h-[24rem] mx-auto relative z-0">
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            alt=""
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="/"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Remix
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {post.title}
            </h2>
            <div className="flex mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {post.author}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {randomDate()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 dark:text-gray-200 text-gray-700 mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia
            modi deserunt delectus laudantium repudiandae eos omnis atque
            adipisci quidem?
          </p>

          <p className="pb-6">
            Inventore libero reiciendis maiores tenetur, quod expedita assumenda
            natus?, fugiat aspernatur nemo voluptatum est vero numquam, optio
            molestiae hic distinctio aliquam laudantium maiores obcaecati
            voluptas officia fugit rem dolore natus? Ipsum, dolore magni? Quidem
            natus obcaecati ducimus nisi illo incidunt.
          </p>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            Quisquam unde et nam e dolor sit, amet consectetur adipisicing elit.
            Non, ad tempore soluta a qui animi? Quae?
          </div>

          <p className="pb-6">
            Amet consectetur adipisicing elit. Corrupti modi asperiores quis
            impedit iusto laborum fugiat accusantium praesentium repellat
            nostrum pariatur aspernatur ab, aliquam nobis voluptate cupiditate
            aut quisquam deleniti explicabo voluptas, sequi dolorum suscipit?
            Repudiandae rerum, doloremque omnis, dicta tempora ullam eligendi
            excepturi iure aliquid necessitatibus iusto et laborum nostrum
            dolore nihil reiciendis magnam, praesentium quae rem facilis vero
            cum. Id, doloremque eaque soluta assumenda possimus ad debitis odio?
          </p>
        </div>
      </article>
    </main>
  );
};

export default Post;

export function CatchBoundary() {
  // const params = useParams();
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="text-center pt-20 flex flex-col items-center gap-5">
        <span className="text-5xl  block ">💣</span>
        <p>{caught.data}</p>

        <Link
          to="/"
          className="hover:shadow shadow-white/50 bg-white/10 w-max px-5 py-2.5"
        >
          lets go back
        </Link>
      </div>
    );
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>Uh oh. I did a whoopsies</div>;
}
