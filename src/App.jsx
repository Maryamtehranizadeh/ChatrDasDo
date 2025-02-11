import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import Layout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./config/reactQuery";
import AuthProvider from "./context/AuthProvider";
import UserProvider from "./context/UserProvider";
import TypeProvider from "./context/TypeProvider";
import SearchProvider from "./context/SearchProvider";

const queryClient = new QueryClient({
  defaultOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <TypeProvider>
              <SearchProvider>
                <Layout>
                  <Router />
                  <Toaster />
                </Layout>
              </SearchProvider>
            </TypeProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
