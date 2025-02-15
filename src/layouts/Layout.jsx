import Footer from "./Footer";
import Header from "./Header";
import SearchBox from "./SearchBox";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchBox />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
