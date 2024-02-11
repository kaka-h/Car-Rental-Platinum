import Navigation from "../../components/Navigation";
import HeaderPay from "../../components/HeaderPay/headerpay";
import DetailPay from "../../components/DetailPay/detailpay"
import PayMain from "../../components/PayMain/paymain";
import Footer from "../../components/Footer";

const PaymentPages = () => {
  return (
    <div>
      <Navigation />
      <HeaderPay showId={false} />
      <DetailPay />
      <PayMain />
      <Footer />
    </div>
  );
};

export default PaymentPages;
