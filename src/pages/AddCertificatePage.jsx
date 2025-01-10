import { useState, useEffect } from "react";
import { baseURL } from "../config/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import ItemForm from "../components/ItemForm";
import styles from "./AddGearPage.module.css";
import toast from "react-hot-toast";
import PhotoModal from "../components/PhotoModal";
import { useAuth } from "../context/AuthProvider";

function AddCertificatePage() {
  const [isModal, setIsModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [properties, setProperties] = useState({});
  const { loginToken } = useAuth();
  const [certificate, setCertificate] = useState({
    issue_date: "",
    expiration_date: "",
    porosity: 0,
    lines_need_trim: false,
    fabric_condition: true,
    certifier: "",
  });

  return <div>AddCertificatepage</div>;
}

export default AddCertificatePage;
