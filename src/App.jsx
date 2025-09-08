import { Routes, Route } from "react-router-dom";

// Components
import { Header } from "./component/Export";
import CashOffer from "./component/CashOffer";
import Footer from "./component/Footer";

// Pages
import FAQ from "./pages/FaQ/FAQs";
import Testimonials from "./pages/Testimonails/Testimonails";
import ContactPage from "./pages/Contact/ContactUs";
import { Home, Compare, SellHome, Works } from "./pages/Export";
import GetACash from "./pages/GetACash/GetACash";
import SellHousePage from "./pages/SellYourHouse/SellYourHome";
import OurCompany from "./pages/OurComapany/OurCompany";
import Privacy from "./pages/Privacypolicy";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cash" element={<CashOffer />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonails" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/sellhome" element={<SellHousePage />} />
        <Route path="/work" element={<Works />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/getcash" element={<GetACash />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
