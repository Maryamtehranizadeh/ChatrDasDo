import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import Layout from "./layouts/Layout";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
        <Toaster />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
