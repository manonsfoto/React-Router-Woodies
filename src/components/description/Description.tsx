import "./Description.css";
interface Props {
  imgSrc: string;
  desc: string;
}
const Description: React.FC<Props> = ({ imgSrc, desc }) => {
  return (
    <section className="stn-desc flex">
      <img src={imgSrc} alt={desc} />
      <p>{desc}</p>
    </section>
  );
};

export default Description;
