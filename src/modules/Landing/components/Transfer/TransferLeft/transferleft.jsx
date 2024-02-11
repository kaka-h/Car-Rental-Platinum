import "./style.css";
import AtmBca from "../AtmBca/atmbca";
import AtmBni from "../AtmBni/atmbni";
import AtmMandiri from "../AtmMandiri/atmmandiri";
import Countdown from "../../countdown/index.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as requestAPI from "../../..//api/api";
import { useSelector } from "react-redux";
import { selectBank } from "../../../features/bankReducer/bankSlice";
import moment from "moment";

const TransferLeft = () => {
  const [car, setCar] = useState([]);
  const { id } = useParams();
  const params = new URLSearchParams(location.search);
  const selectedBank = params.get("bank");
  const bank = useSelector(selectBank);

  const now = moment();
  const deadline = now.add(24, "hours").add(1, "day");
  const formattedDate = deadline.format("dddd, DD MMMM YYYY HH:mm");

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { access_token: token },
    };
    try {
      const res = await requestAPI.customerOrder(id, config);
      setCar(res.data);
    } catch (error) {
      alert("Terjadi Kesalahan di sisi Server!")
    }
  };

  const handleCopy = () => {
    const textToCopy = document.querySelector(".box-left-transfer").innerText;
    navigator.clipboard.writeText(textToCopy);
    alert("Text copied to clipboard!");
  };

  return (
    <div>
      <div className="transfer-left-1">
        <div className="p-3">
          <h5 className="fw-bold mb-3">Selesaikan Pembayaran Sebelum</h5>
          <p>{formattedDate} WIB</p>
        </div>
        <div className="d-flex align-items-center me-3">
          <Countdown timerKey="countdown24Hours" />
        </div>
      </div>

      <div className="d-flex flex-column transfer-left-2">
        <h5 className="fw-bold">Lakukan Transfer Ke</h5>
        <div className="d-flex mb-2 p-1 position-relative" id="bca">
          <p className="bank-transfer">
            {selectedBank === "BCA Transfer" && bank.bca.title}
            {selectedBank === "BNI Transfer" && bank.bni.title}
            {selectedBank === "Mandiri Transfer" && bank.mandiri.title}
          </p>
          <div className="wrapper-an">
            <p className="mt-2">
              {selectedBank === "BCA Transfer" && bank.bca.transfer}
              {selectedBank === "BNI Transfer" && bank.bni.transfer}
              {selectedBank === "Mandiri Transfer" && bank.mandiri.transfer}
            </p>
            <p className="mt-3">a.n Binar Car Rental</p>
          </div>
        </div>
        <div className="mt-2">
          <p>Nomor Rekening</p>
          <div className="box-left-transfer fs-6">
            {selectedBank === "BCA Transfer" && bank.bca.accountNumber}
            {selectedBank === "BNI Transfer" && bank.bni.accountNumber}
            {selectedBank === "Mandiri Transfer" && bank.mandiri.accountNumber}
            <i
              onClick={handleCopy}
              className="bi bi-copy icon-copy-transfer"></i>
          </div>
        </div>
        <div className="mt-3">
          <p>Total Bayar</p>
          <div className="box-left-transfer">
            <p className="fw-bold fs-6">Rp. {car.total_price}</p>
            <i
              onClick={handleCopy}
              className="bi bi-copy icon-copy-transfer"></i>
          </div>
        </div>
      </div>

      <div className="transfer-left-3">
        <h6 className="fw-bold">Intruksi Pembayaran</h6>
        <div className="p-3">
          {selectedBank === "BCA Transfer" && <AtmBca />}
          {selectedBank === "BNI Transfer" && <AtmBni />}
          {selectedBank === "Mandiri Transfer" && <AtmMandiri />}
        </div>
      </div>
    </div>
  );
};

export default TransferLeft;
