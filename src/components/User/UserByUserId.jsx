import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUSerId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );
  if (!data) {
    return <div>{"loading"}</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{`created by ${data.name}`}</div>;
};
