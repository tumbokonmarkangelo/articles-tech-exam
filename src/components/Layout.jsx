import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";
import { useUserStore } from "../hooks/user";
import UserDropdown from "./UserDropdown";
import { useUsersStore } from "../hooks/users";
import { UsersQueries } from "../utilities/queries";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const { user } = useUserStore();
  const { setUsers } = useUsersStore();
  const { data, isLoading, isError } = UsersQueries();

  useEffect(() => {
    if (data && !isLoading && !isError) setUsers(data);
  }, [data, isLoading, isError, setUsers]);

  return (
    <>
      <ToastContainer />
      <div
        id="nav"
        className="px-3 py-5 flex justify-between items-center bg-gray-100 shadow-gray-300 shadow-sm"
      >
        <div>
          <Link to={``}>
            <img src={logo} alt="logoipsum" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              {user ? (
                <UserDropdown />
              ) : (
                <Link
                  to={`login`}
                  className="inline-block border rounded px-5 py-2 bg-blue-950 text-white hover:bg-white hover:text-black hover:border-black transition duration-300"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div id="main" className="px-5 py-5">
        <div className="pt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}
