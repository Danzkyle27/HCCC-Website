import logo from "../assets/logo.png";
import bg from "../assets/bg.png";

function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        padding: "40px",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <img src={logo} alt="Church Logo" className="hero-logo" />
      <div className="hero-text">
        <h1>HOPE IN CHRIST CITY CHURCH</h1>
        <h2>A BIBLE-BELIEVING CHURCH</h2>
      </div>
    </section>
  );
}

export default Home;
