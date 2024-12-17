import Footer from "../../components/footer/Footer";
import Headline from "../../components/headline/Headline";
import Nav from "../../components/nav/Nav";
import "./About.css";
import imgAbout from "../../../public/img/About.png";

const About = () => {
  return (
    <>
      <Nav />
      <Headline pageName={"About Us"} text={"Who we are"} />
      <main className="flex about">
        <img src={imgAbout} alt="about" />
        <div className="about-textbox">
          <p className="about-maintext">
            <span>WOODIES</span> is the{" "}
            <span>home of modern wooden furniture</span>
          </p>
          <p className="about-subtext">
            the answer to your need for furniture with shapes, sizes and colors.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
