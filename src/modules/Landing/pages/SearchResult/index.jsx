import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SearchSection from "../../components/SearchSection";
import EmptyHero from "../../components/EmptyHero";

const SearchResult = () => {
  return (
    <div>
      <Navigation />
      <EmptyHero />
      <SearchSection />
      <Footer />
    </div>
  );
};

export default SearchResult;
