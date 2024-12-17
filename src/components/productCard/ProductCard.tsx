import { Link } from "react-router-dom";
import "./ProductCard.css";

interface Props {
  title: string;
  imgSrc: string;
  link: string;
}

const ProductCard: React.FC<Props> = ({ title, imgSrc, link }) => {
  return (
    <article className="productCard">
      {" "}
      <p>{title} </p>
      <img className="cardImg" src={imgSrc} alt={title} />
      <Link to={link}>
        <button type="button" className="btn-shopNow">
          Shop now
        </button>
      </Link>
    </article>
  );
};

export default ProductCard;
