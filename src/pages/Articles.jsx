import { useEffect } from "react";
import ListArticles from "../components/ListArticles";
import { useArticlesStore } from "../hooks/articles";
import { GetAllArticles } from "../utilities/queries";
import ArticlesFilter from "../components/ArticlesFilter";

const Articles = () => {
  const { articles, setArticles } = useArticlesStore();
  const { data, isLoading, isError } = GetAllArticles().query;

  useEffect(() => {
    if (data && !isLoading && !isError) setArticles(data);
  }, [data, isError, isLoading, setArticles]);

  return isLoading || isError ? null : (
    <>
      <div>
        <div className="flex justify-between items-end mb-3">
          <h1 className="text-3xl font-semibold">Articles</h1>
        </div>
        <div className="flex justify-between items-end mb-3">
          <div className="flex-1">
            <ArticlesFilter
              onFilter={(values) => {
                console.log("values", values);
              }}
            />
          </div>
          <button
            onClick={() => {}}
            type="button"
            className="inline-block border rounded px-5 py-2 bg-blue-950 text-white hover:bg-white hover:text-black hover:border-black transition duration-300 gap-1"
          >
            Manage
          </button>
        </div>
        <ListArticles data={articles} />
      </div>
    </>
  );
};

export default Articles;
