import { useCallback, useEffect, useReducer, useState } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("no such action type!");
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>{"ローディング中"}</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データがありません</div>;
  }

  return (
    <ol>
      {state.data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ol>
  );
};

export default Posts;
