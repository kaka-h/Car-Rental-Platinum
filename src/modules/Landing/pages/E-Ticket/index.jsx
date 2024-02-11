import Navigation from '../../components/Navigation'
import HeaderPay from '../../components/HeaderPay/headerpay';
import EticketSection from '../../components/eticketsection/eticketsection';
import Footer from '../../components/Footer';

const Eticket = () => {
    return (
        <div>
            <Navigation/>
            <HeaderPay showId={true}/>
            <EticketSection/>
            <Footer/>
        </div>
    );
}

export default Eticket;