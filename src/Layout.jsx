import { Header, Footer, BackToTop } from "./components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
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
