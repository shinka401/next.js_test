import { useUser } from "src/hooks/useUser";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <ol>
        <li>{`name: ${data.email}`}</li>
        <li>{`street: ${data.address.street}`}</li>
        <li>{`suite: ${data.address.suite}`}</li>
        <li>{`code: ${data.address.zipcode}`}</li>
      </ol>
    </div>
  );
};
