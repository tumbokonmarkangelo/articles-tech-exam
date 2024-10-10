import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const UsersQueries = () => {
  const query = useQuery("users", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  });
  return query;
};

export const ArticlesQueries = (props = { params: {} }) => {
  const [params, setParams] = useState({
    ...props?.params,
    _page: props?.page ?? 1,
    _limit: props?.limit ?? 100,
  });

  const getArticles = async (props) => {
    console.log("params", props.newParams);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?" +
        new URLSearchParams(props?.newParams ?? params).toString()
    );
    // console.log("Total Articles:", response.headers.get("X-Total-Count") ?? 0);
    return response.json();
  };

  const queryClient = useQueryClient();

  const query = useQuery({
    initialData: [],
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const refetchMutation = useMutation({
    mutationKey: ["articles"],
    mutationFn: getArticles,
    onSuccess: (data) => {
      queryClient.setQueryData("articles", data);
    },
  });

  const updateParams = async (params) => {
    const newParams = {
      ...props?.params,
      ...params,
      _page: props?.page ?? 1,
      _limit: props?.limit ?? 100,
    };
    setParams(newParams);
    refetchMutation.mutate({ newParams });
  };

  return { query, updateParams };
};

export const ArticleQueries = () => {
  const queryClient = useQueryClient();

  const postMutation = useMutation(
    async (payload) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      return response.json();
    },
    {
      onSuccess: (data) => {
        // Invalidate and refetch
        console.log("Post response:", data);
        queryClient.invalidateQueries("articles");
      },
    }
  );

  const updateMutation = useMutation(
    async (payload) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      return response.json();
    },
    {
      onSuccess: (data) => {
        // Invalidate and refetch
        console.log("Update response:", data);
        queryClient.invalidateQueries("articles");
      },
    }
  );

  return { postMutation, updateMutation };
};
