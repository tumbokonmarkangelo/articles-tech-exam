import { useEffect } from "react";
import ListArticles from "../components/ListArticles";
import { useArticlesStore } from "../hooks/articles";
import { ArticlesQueries } from "../utilities/queries";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import PostArticleButton from "../components/PostArticleButton";
import { useUserStore } from "../hooks/user";

const MyArticles = () => {
  const { user } = useUserStore();
  const { articles, setArticles } = useArticlesStore();
  const {
    query: { data, isLoading, isError },
  } = ArticlesQueries({
    params: { userId: user.id },
  });

  useEffect(() => {
    if (data && !isLoading && !isError) setArticles(data);
  }, [data, isError, isLoading, setArticles]);

  return isLoading || isError ? null : (
    <>
      <div>
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-1 items-center gap-3">
            <Link
              to="/articles"
              className="rounded-full bg-gray-300 p-1 hover:bg-gray-100 transition duration-500"
            >
              <ArrowUturnLeftIcon className="size-5" />
            </Link>
            <h1 className="text-3xl font-semibold">My Articles</h1>
          </div>
          <PostArticleButton />
        </div>
        <ListArticles data={articles} isAdmin />
      </div>
    </>
  );
};

export default MyArticles;
