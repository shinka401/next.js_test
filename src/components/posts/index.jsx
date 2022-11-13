import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
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
    <ol>
      {data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ol>
  );
};

export default Posts;
