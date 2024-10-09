import { Form } from "react-router-dom";
import { getFormData } from "../utilities";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function ArticlesFilter(props = { onFilter: () => {} }) {
  const { onFilter } = props;
  return (
    <Form
      onChange={(e) => {
        const values = getFormData(e.currentTarget);
        onFilter(values);
      }}
      className="flex flex-wrap gap-5 max-w-[400px]"
    >
      <input
        type="text"
        name="keyword"
        placeholder="Keyword"
        className="flex-1 placeholder-gray-400 px-2 border border-black rounded"
        required
      />
      <select
        name="type"
        className="flex-[0_0_20%] placeholder-gray-400 px-2 border border-black rounded"
      >
        <option value="id">ID</option>
        <option value="userId">UserId</option>
        <option value="title">Title</option>
      </select>
    </Form>
  );
}
