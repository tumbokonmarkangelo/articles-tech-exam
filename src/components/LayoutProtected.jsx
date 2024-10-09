import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/user";
import { useEffect } from "react";

export default function LayoutProtected() {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return !user ? null : <Outlet />;
}
