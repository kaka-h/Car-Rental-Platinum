import Navigation from "../../components/Navigation";
import HeaderPay from "../../components/HeaderPay/headerpay";
import Transfer from "../../components/Transfer/transfer";
import Footer from "../../components/Footer";

const TransferPages = () => {
    return (
        <div>
            <Navigation />
            <HeaderPay showId={true}/>
            <Transfer/>
            <Footer/>
        </div>
    );
}

export default TransferPages;