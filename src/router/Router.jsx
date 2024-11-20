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
import CertificateListPage from "../pages/CertificateListPage";
import WingDetails from "../pages/WingDetails";
import CertifierDetails from "../pages/CertifierDetails";
import SignupPage from "../pages/SignupPage";
import GearListPage from "../pages/GearListPage";
import InstrumentList from "../pages/InstrumentList";

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} replace />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homepage/:id" element={<ItemDetails />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/wings" element={<WingListPage />} />
      <Route path="/instruments" element={<InstrumentList />} />
      <Route path="/gears" element={<GearListPage />} />
      <Route path="/wingdetails/:id" element={<WingDetails />} />
      <Route path="/certifiers" element={<CertifierListPage />} />
      <Route path="/certifierdetails/:id" element={<CertifierDetails />} />
      <Route path="/addwing" element={<AddWingPage />} />
      <Route path="/addcertifier" element={<AddCertifierPage />} />
      <Route path="/certificates" element={<CertificateListPage />} />
    </Routes>
  );
}

export default Router;
