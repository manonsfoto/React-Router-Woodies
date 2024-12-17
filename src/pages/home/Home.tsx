import Nav from "../../components/nav/Nav";
import "./Home.css";
import imgHome from "/public/img/Home.png";
const Home = () => {
  return (
    <>
      <Nav />
      <main className="flex home">
        <article className="flex home-textbox">
          <p>
            Are you looking for <span>woodden furniture</span> for your place?
          </p>
          <h1>This is the Right Place</h1>
          <button type="button">Explore Categories</button>
        </article>
        <div className="imgbox">
          <img src={imgHome} alt="Home" />
        </div>
        <aside></aside>
      </main>
    </>
  );
};

export default Home;
