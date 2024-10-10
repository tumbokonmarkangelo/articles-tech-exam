import { useEffect } from "react";
import ListArticles from "../components/ListArticles";
import { useArticlesStore } from "../hooks/articles";
import { ArticlesQueries } from "../utilities/queries";
import ArticlesFilter from "../components/ArticlesFilter";
import { Link } from "react-router-dom";

const Articles = () => {
  const { articles, setArticles } = useArticlesStore();
  const { query, updateParams } = ArticlesQueries();
  const { data, isLoading, isError } = query;

  useEffect(() => {
    if (data && !isLoading && !isError) setArticles(data);
  }, [data, isError, isLoading, setArticles]);

  return isLoading || isError ? null : (
    <>
      <div>
        <div className="flex justify-between items-end mb-3">
          <h1 className="text-3xl font-semibold">Articles</h1>
        </div>
        <div className="flex justify-between items-start mb-3 gap-10">
          <div className="flex-1">
            <ArticlesFilter
              onFilter={(values) => {
                updateParams(
                  values.keyword ? { [values.type]: values.keyword } : {}
                );
              }}
            />
          </div>
          <Link
            to="/manage-articles"
            className="inline-block border rounded px-5 py-2 bg-blue-950 text-white hover:bg-white hover:text-black hover:border-black transition duration-300 gap-1"
          >
            Manage
          </Link>
        </div>
        <ListArticles data={articles} />
      </div>
    </>
  );
};

export default Articles;
