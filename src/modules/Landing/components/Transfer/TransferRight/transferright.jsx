import { useState } from "react";
import "./style.css";
import * as requestAPI from "../../../api/api";
import Countdown from "../../countdown/index.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const TransferRight = () => {
  const [file, setSlip] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleFileChange = (e) => {
    const extend = e.target.files[0]?.type.split("/")[1];
    const allowedExtend = ["png", "jpeg"];
    const sizeImage = 1024 * 1024;
    const data = e.target.files[0];

    if (!allowedExtend.includes(extend)) {
      alert("file harus png / jpeg");
    } else if (data.size > sizeImage) {
      alert("size image terlalu besar");
    } else {
      setSlip(e.target.files[0]);
      setShowImage(URL.createObjectURL(e.target.files[0]));
      setIsImageSelected(true);
    }
  };

  const handleUpload = async () => {
    if (isImageSelected) {
      document.getElementById("file").disabled = true;
    }

    const formData = new FormData();
    formData.append("slip", file);

    const token = localStorage.getItem("access_token");
    const config = {
      headers: { access_token: token },
    };

    try {
      const response = await requestAPI.paymentSlip(id, formData, config);
      navigate(`/eticket/${id}`);

    } catch (error) {
      // alert("Terjadi Kesalahan di sisi Server!")
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };

  return (
    <div
      className={`transfer-right ${showConfirmation ? "transfer-right-confirm" : ""
        }`}>
      {!showConfirmation ? (
        <div>
          <p className="text-transfer-right">
            Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
          </p>
          <button
            onClick={handleConfirmationClick}
            className="btn-transfer-right-1">
            Konfirmasi Pembayaran
          </button>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold">Konfirmasi Pembayaran</p>
            <Countdown timerKey="countdown10Minutes" />
          </div>
          <p className="text-transfer-right mb-4">
            Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
            akan segera kami cek, tunggu kurang lebih 10 menit untuk mendapatkan
            konfirmasi.
          </p>
          <h6>Upload Bukti Pembayaran</h6>
          <p className="text-transfer-right">
            Untuk membantu kami lebih cepat melakukan pengecekan, kamu bisa
            upload bukti bayarmu
          </p>
          <div className="d-flex flex-column">
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="wrapper-img-slip-transfer">
              <i className="bi bi-image"></i>
              <img src={showImage} alt="" className="img-slip-transfer" />
            </div>
            <label
              className="btn-transfer-right"
              onClick={handleUpload}
              htmlFor="file"
              style={{ cursor: "pointer" }}>
              {isImageSelected ? "Konfirmasi" : "Upload"}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferRight;
