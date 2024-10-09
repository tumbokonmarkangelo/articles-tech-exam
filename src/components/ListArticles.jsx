import ArticleCard from "./ArticleCard";

export default function ListArticles({ data }) {
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]">
      {data && data.map((article) => <ArticleCard article={article} />)}
    </div>
  );
}
