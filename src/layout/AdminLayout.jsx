import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AdminNavbar from "./AdminNavbar";
import Footer from "../components/Footer";

import { LoginContext } from "../context/LoginContext";

const AdminLayout = () => {
  // Hent fra context om en bruger er logget ind

  // BRUG DET HER HVIS DU FÅR TID TIL AT LAVE LOGIN
  // const { adminUser } = useContext( LoginContext );

  // // send til login hvis ikke logget ind
  // if ( !adminUser ) {
  //   return <Navigate to="/login" replace />;
  // }

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
