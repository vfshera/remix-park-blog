import PostCard from "~/components/PostCard";
import { randomDate } from "~/utils/date";
import { Posts } from "~/posts";

export default function Index() {
  return (
    <main id="HomePage" className="park-width">
      <section className="latest">
        <a
          rel="noopener noreferrer"
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Thanks for checking out Astro Park!
            </h3>
            <span className="text-xs dark:text-gray-400">{randomDate()}</span>
            <p>
              This project acts as a demo to make a blog site with different
              integrations.Its main focus is integration not UI
            </p>
          </div>
        </a>
      </section>

      <section className="py-6 sm:py-12">
        <div className="mx-auto space-y-8">
          <h2 className="space-y-2 text-center text-3xl font-bold">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {Posts.map((post, i) => (
              <PostCard key={i} id={i + 1} title={post.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
