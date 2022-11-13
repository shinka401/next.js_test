import { fetcher } from "src/utils/fetcher";
const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post?.userId}`
      : null,
    fetcher
  );
  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError,
  };
};
