import "./Headline.css";
import flower from "/public/img/Flower.png";

interface Props {
  pageName: string;
  text: string;
}
const Headline: React.FC<Props> = ({ pageName, text }) => {
  return (
    <section className="flex headline">
      <img src={flower} alt="flower-logo" />
      <p>{text}</p>

      <div className="bar"></div>

      <h1>{pageName}</h1>
    </section>
  );
};

export default Headline;
