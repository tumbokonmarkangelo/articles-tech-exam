import ArticleCard from "./ArticleCard";
// import Pagination from "./Pagination";

export default function ListArticles({ data, isAdmin = false }) {
  return (
    <>
      <div className="grid gap-3 lg:gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]">
        {data &&
          data.map((article) => (
            <ArticleCard key={article.id} article={article} isAdmin={isAdmin} />
          ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
}
