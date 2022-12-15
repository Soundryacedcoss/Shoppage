import logo from "./image/logo.png";
import fb from "./image/facebook.png";
import insta from "./image/instagram.png";
import linked from "./image/linkedin.png";
import yt from "./image/youtube.png";
import "./Footer.css";
function Footer() {
  return (
    <section className="footerContainer">
      <div style={{ width: "53%" }}>
        <a className="navbar-brand" href="a#" style={{ marginLeft: "-64%" }}>
          <img src={logo} alt="" style={{ width: "20%" }} />
        </a>
        <p style={{ textAlign: "left", marginLeft: "9%", width: "25%" }}>
          Get the breathing space now, and we'll extend your term at the other
          end year for go.
        </p>
        <div style={{ textAlign: "left", marginLeft: "9%" }}>
          <span style={{ margin: "1%" }}>
            {" "}
            <a href="@a">
              <img src={fb} alt="" />
            </a>
          </span>
          <span style={{ margin: "1%" }}>
            <a href="@1">
              <img src={insta} alt="" />
            </a>
          </span>
          <span style={{ margin: "1%" }}>
            <a href="@a">
              <img src={linked} alt="" />
            </a>
          </span>
          <span style={{ margin: "1%" }}>
            <a href="@A">
              <img src={yt} alt="" />
            </a>
          </span>
        </div>
      </div>
      <div style={{ width: "30%", marginLeft: "-16%", textAlign: "left" }}>
        <h4>Book Category</h4>
        <ul>
          <li>History</li>
          <li>Horror-Thriller</li>
          <li>Love Stories</li>
          <li>Science Fiction</li>
          <li>Business</li>
        </ul>
      </div>
      <div
        style={{ marginLeft: "-12%", marginRight: "21%", textAlign: "left" }}
      >
        <ul>
          <li>Biography</li>
          <li>Astrology</li>
          <li>Digital Marketing</li>
          <li>Software Development</li>
          <li>Ecommerce</li>
        </ul>
      </div>
      <div style={{ textAlign: "left", marginLeft: "-11%" }}>
        <h4>Site Map</h4>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
