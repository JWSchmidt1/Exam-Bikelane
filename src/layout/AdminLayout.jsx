import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "../components/Footer";

import { LoginContext } from "../context/LoginContext";

const AdminLayout = () => {

    const { adminUser } = useContext( LoginContext );

    if ( !adminUser ) {
      return <Navigate to="/login" replace />;
    }

  return (
    <>
      <header>
        <AdminNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AdminLayout;
