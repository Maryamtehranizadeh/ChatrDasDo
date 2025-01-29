import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import Layout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./config/reactQuery";
import AuthProvider from "./context/AuthProvider";
import UserProvider from "./context/UserProvider";

const queryClient = new QueryClient({
  defaultOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <Layout>
              <Router />
              <Toaster />
            </Layout>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
