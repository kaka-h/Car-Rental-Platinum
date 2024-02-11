import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import DetailSection from "../../components/DetailSection";
import SearchSection from "../../components/SearchSection";
import EmptyHero from "../../components/EmptyHero";

const DetailCarPage = () => {
  return (
    <div>
      <Navigation />
      <EmptyHero />
      <SearchSection />
      <DetailSection />
      <Footer />
    </div>
  );
};

export default DetailCarPage;
