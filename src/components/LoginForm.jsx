import { Form, useNavigate } from "react-router-dom";
import { getFormData } from "../utilities";
import { useUserStore } from "../hooks/user";
import { useUsersStore } from "../hooks/users";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { users } = useUsersStore();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const values = getFormData(e.target);
        const user = users.filter((user) => {
          return user.username === values.username &&
            user.email === values.email
            ? true
            : false;
        })[0];
        if (users && user) {
          setUser(user);
          console.log("user", user);
          return navigate("/articles");
        }
      }}
      className="flex gap-5 flex-col"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="placeholder-gray-400 px-2 border border-black rounded"
        required
      />
      <input
        type="password"
        name="email"
        placeholder="Email"
        className="placeholder-gray-400 px-2 border border-black rounded"
        required
      />
      <button
        type="submit"
        className="border rounded px-5 bg-blue-950 disabled:bg-gray-500 text-white hover:bg-white hover:text-black hover:border-black transition duration-300"
      >
        Login
      </button>
    </Form>
  );
}
