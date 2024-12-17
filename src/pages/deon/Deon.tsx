import Footer from "../../components/footer/Footer";
import Headline from "../../components/headline/Headline";
import Nav from "../../components/nav/Nav";
// import imgChair from "../../../public/img/Stuhl.png";
// import Description from "../../components/description/description";

const Deon = () => {
  return (
    <>
      <Nav />
      <Headline pageName={"Products"} text={"Deon"} />
      {/* <Description
        imgSrc={imgChair}
        desc={
          "Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
        }
      /> */}
      <Footer />
    </>
  );
};

export default Deon;
