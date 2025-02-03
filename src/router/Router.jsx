import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import ItemDetails from "../pages/ItemDetails";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import AuthPage from "../pages/AuthPage";
import CertifierListPage from "../pages/CertifierListPage";
import AddCertifierPage from "../pages/AddCertifierPage";
import AddGearPage from "../pages/AddGearPage";
import CertificateListPage from "../pages/CertificateListPage";
import CertifierDetails from "../pages/CertifierDetails";
import SignupPage from "../pages/SignupPage";
import GearListPage from "../pages/GearListPage";
import InstrumentList from "../pages/InstrumentList";
import HarnessListPage from "../pages/HarnessListPage";
import Test from "../pages/Test";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import WingPage from "../pages/WingPage";
import AboutUs from "../pages/AboutUs";
import TermsConditions from "../pages/TermsConditions";
import SecuritySafety from "../pages/SecuritySafety";
import AddCertificatePage from "../pages/AddCertificatePage";
import ResetPassword from "../pages/ResetPassword";
import UserProfile from "../pages/UserProfile";
import EditGear from "../pages/EditGear";

function Router() {
  const { loginToken } = useAuth();

  return (
    <Routes>
      <Route index path="/" element={<HomePage />} replace />
      <Route
        path="/dashboard"
        element={!!loginToken ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={!loginToken ? <AuthPage /> : <Navigate to="/dashboard" />}
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homepage/:id" element={<ItemDetails />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/wings" element={<WingPage />} />
      <Route path="/harness" element={<HarnessListPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/instruments" element={<InstrumentList />} />
      <Route path="/gears" element={<GearListPage />} />
      <Route path="/itemdetails/:id" element={<ItemDetails />} />
      <Route path="/certifiers" element={<CertifierListPage />} />
      <Route path="/certifierdetails/:id" element={<CertifierDetails />} />
      <Route path="/addgear" element={<AddGearPage />} />
      <Route path="/addcertficate" element={<AddCertificatePage />} />
      <Route path="/addcertifier" element={<AddCertifierPage />} />
      <Route path="/certificates" element={<CertificateListPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/security-and-safety" element={<SecuritySafety />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/editgear/:id" element={<EditGear />} />
    </Routes>
  );
}

export default Router;
