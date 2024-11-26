import { useEffect, useState } from "react";

function Skeleton() {
  return (
    <>
      <div className="h-4 w-1/4 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-8 rounded-md bg-gray-500 animate-pulse"></div>
    </>
  );
}

export function App2() {
  const [posts, setPosts] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 10));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const updatePosts = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    setCounter(counter + 1);
    const newPosts = data.slice(counter * 10, counter * 10 + 10);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  return (
    <div
      className="mt-8 max-w-screen-md mx-auto data-[loading=true]:animate-pulse"
      data-loading={loading}
    >
      <h1 className="text-4xl font-bold">Posts {posts.length}</h1>
      <ul className="space-y-6 mt-4">
        {posts?.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl font-bold text-green">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.body}</p>
          </li>
        ))}
        {loading && <Skeleton />}
      </ul>

      <button
        className="bg-blue-500 rounded-md px-5 py-3"
        onClick={updatePosts}
      >
        Load More
      </button>
    </div>
  );
}
