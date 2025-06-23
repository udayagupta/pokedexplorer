import { Header, Footer, BackToTop } from "./components";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header />}
      <main
        className="flex flex-col gap-5"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};
