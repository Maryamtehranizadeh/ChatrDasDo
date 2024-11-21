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
import AddGearPage from "../pages/AddGearPage";
import CertificateListPage from "../pages/CertificateListPage";
import WingDetails from "../pages/ItemDetails";
import CertifierDetails from "../pages/CertifierDetails";
import SignupPage from "../pages/SignupPage";
import GearListPage from "../pages/GearListPage";
import InstrumentList from "../pages/InstrumentList";
import HarnessListPage from "../pages/HarnessListPage";

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
      <Route path="/harness" element={<HarnessListPage />} />

      <Route path="/instruments" element={<InstrumentList />} />
      <Route path="/gears" element={<GearListPage />} />
      <Route path="/itemdetails/:id" element={<ItemDetails />} />
      <Route path="/certifiers" element={<CertifierListPage />} />
      <Route path="/certifierdetails/:id" element={<CertifierDetails />} />
      <Route path="/addgear" element={<AddGearPage />} />
      <Route path="/addcertifier" element={<AddCertifierPage />} />
      <Route path="/certificates" element={<CertificateListPage />} />
    </Routes>
  );
}

export default Router;
