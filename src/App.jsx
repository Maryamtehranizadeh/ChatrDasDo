import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import Layout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./config/reactQuery";
import AuthProvider from "./context/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Router />
            <Toaster />
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
