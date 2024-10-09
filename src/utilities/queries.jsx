import { useMutation, useQuery, useQueryClient } from "react-query";

export const GetAllUsers = () => {
  const query = useQuery("users", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  });
  return query;
};

export const GetAllArticles = (props = { page: 1, limit: 12, params: {} }) => {
  const { page, limit, params } = props;

  const queryClient = useQueryClient()

  const query = useQuery("articles", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?" +
        new URLSearchParams({
          ...params,
          _page: page,
          _limit: limit,
        }).toString()
    );
    console.log("Total Articles:", response.headers.get("X-Total-Count") ?? 0);
    return response.json();
  });


  const mutation = useMutation(()=>{
    
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
    },
  })

  console.log('query', query)
  return query;
};

export const CreateArticle = (article) => {
  const query = useQuery("article", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  });
  return query;
};

export const UpdateArticle = (article) => {
  const query = useQuery("article", async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${article.id}`,
      {
        method: "PUT",
        body: JSON.stringify(article),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.json();
  });
  return query;
};

export const DeleteArticle = (article) => {
  const query = useQuery("article", async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${article.id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  });
  return query;
};
