import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Layout({ children }) {
 

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
