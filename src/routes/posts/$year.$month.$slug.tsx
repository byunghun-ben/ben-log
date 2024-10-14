import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Route = createFileRoute("/posts/$year/$month/$slug")({
  component: PostComponent,
});

function PostComponent() {
  const params = useParams({
    from: "/posts/$year/$month/$slug",
  });

  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/posts/${params.year}/${params.month}/${params.slug}.md`,
          {
            headers: {
              "Content-Type": "text/markdown",
              Accept: "text/markdown",
              charset: "utf-8",
            },
          }
        );

        if (!response.ok) {
          throw new Error("블로그 포스트를 불러오는데 실패했습니다.");
        }

        const mdSource = await response.text();
        setMarkdown(mdSource);
      } catch (error) {
        console.error("Error fetching post", error);
      }
    };

    fetchPostContent();
  }, [params]);
  return (
    <div>
      <h1>Post</h1>
      <Markdown className="markdown">{markdown}</Markdown>
    </div>
  );
}
