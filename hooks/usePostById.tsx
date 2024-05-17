import { Post } from "@/lib/sanityTypes";
import React, { useEffect, useState } from "react";

export const usePostById = (slug: any) => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetch(`/api/postById?id=${slug}`);
        const data = await fetchedPosts.json();
        const posts: Post[] = data.posts;
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);
  return posts;
};
