import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link className="p-3 border rounded border-black hover:ring-1 ring-blue-400">
      <h4 className="text-xl line-clamp-1 break-all capitalize font-medium">
        {article.title}
      </h4>
      <p className="text-base line-clamp-2">{article.body}</p>
    </Link>
  );
}
