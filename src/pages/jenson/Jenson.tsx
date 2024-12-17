import Description from "../../components/description/Description";
import Footer from "../../components/footer/Footer";
import Headline from "../../components/headline/Headline";
import Nav from "../../components/nav/Nav";
import imgDesk from "/public/img/Tisch.png";

const Jenson = () => {
  return (
    <>
      <Nav />
      <Headline pageName={"Products"} text={"Jenson"} />
      <Description
        imgSrc={imgDesk}
        desc={
          "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
        }
      />
      <Footer />
    </>
  );
};

export default Jenson;
