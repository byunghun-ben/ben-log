import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/posts/")({
  component: PostsComponent,
});

type PostMetadata = {
  title: string;
  summary: string;
  date: string;
  slug: string;
};

function PostsComponent() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    const fetchPostsMetadata = async () => {
      const response = await fetch("./posts/metadata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const metadata = await response.json();
      setPosts(metadata);
    };

    fetchPostsMetadata();
  }, []);

  return (
    <div className="p-2">
      <h3>Posts</h3>
      {posts.map((post) => (
        <Link
          key={post.slug}
          to="/posts/$year/$month/$slug"
          params={{
            year: post.date.split("-")[0],
            month: post.date.split("-")[1],
            slug: post.slug,
          }}
          className="p-2"
        >
          <h4>{post.title}</h4>
          <p>{post.summary}</p>
          <p>{post.date}</p>
        </Link>
      ))}
    </div>
  );
}
