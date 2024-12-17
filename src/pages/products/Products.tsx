import Footer from "../../components/footer/Footer";
import Headline from "../../components/headline/Headline";
import Nav from "../../components/nav/Nav";
import ProductCard from "../../components/productCard/ProductCard";
import "./Products.css";
import imgDesk from "../../../public/img/Tisch.png";
import imgChair from "../../../public/img/Stuhl.png";
import imgBowl from "../../../public/img/Schuesseln.png";
const Products = () => {
  return (
    <>
      <Nav />
      <Headline pageName={"Products"} text={"What we have"} />
      <main className="flex products-cardwrapper">
        <ProductCard title={"Jenson"} imgSrc={imgDesk} link={"/jenson"} />
        <ProductCard title={"Deon"} imgSrc={imgChair} link={"/deon"} />
        <ProductCard title={"Krisha"} imgSrc={imgBowl} link={"/krisha"} />
      </main>
      <Footer />
    </>
  );
};

export default Products;
