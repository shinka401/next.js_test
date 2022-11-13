import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  if (isLoading) {
    return <div>{"ローディング中"}</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データがありません</div>;
  }

  return (
    <div>
      <ol>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
