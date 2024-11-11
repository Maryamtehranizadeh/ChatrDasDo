import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import ItemDetails from "../pages/ItemDetails";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import AuthPage from "../pages/AuthPage";
import WingListPage from "../pages/WingListPage";
import CertifierListPage from "../pages/CertifierListPage";
import AddCertifierPage from "../pages/AddCertifierPage";
import AddWingPage from "../pages/AddWingPage";

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} replace />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homepage/:id" element={<ItemDetails />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/winglist" element={<WingListPage />} />
      <Route path="/certifiers" element={<CertifierListPage />} />
      <Route path="/addwing" element={<AddWingPage />} />
      <Route path="/addcertifier" element={<AddCertifierPage />} />
    </Routes>
  );
}

export default Router;
