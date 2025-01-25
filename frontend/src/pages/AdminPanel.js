import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex min-h-[calc(100vh-120px)] mt-8 ml-4">
      {/* Sol Menü */}
      <aside className="bg-white w-60 h-2/4 fixed top-0 left-0 shadow-md z-50 mt-28 ml-4">
        <div className="h-32 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        {/* Navigasyon */}
        <nav className="grid p-4">
          <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">
            Tüm Kullanıcılar
          </Link>
          <Link to={"all-products"} className="px-2 py-1 hover:bg-slate-100">
            Tüm Ürünler
          </Link>
        </nav>
      </aside>

      {/* Sağ İçerik */}
      <main className="ml-60 w-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
