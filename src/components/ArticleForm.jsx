import { Form } from "react-router-dom";
import { getFormData } from "../utilities";

export default function ArticleForm({
  article,
  onSubmit = () => {},
  onCancel = () => {},
}) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const values = getFormData(e.target);
        onSubmit(values);
      }}
      className="flex gap-5 flex-col"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="placeholder-gray-400 px-2 border border-black rounded"
        required
        defaultValue={article ? article.title : undefined}
      />
      <textarea
        name="body"
        placeholder="Body"
        rows={8}
        className="placeholder-gray-400 px-2 border border-black rounded resize-none"
        required
        defaultValue={article ? article.body : undefined}
      />
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          type="button"
          className="border rounded px-5 bg-gray-300 disabled:bg-gray-200 text-black hover:bg-white hover:border-black transition duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="border rounded px-5 bg-blue-950 disabled:bg-gray-500 text-white hover:bg-white hover:text-black hover:border-black transition duration-300"
        >
          {article ? "Update" : "Save"}
        </button>
      </div>
    </Form>
  );
}
