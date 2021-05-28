import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h4>Call US</h4>
              <p>011-25478658945</p>
            </div>
            <div className="footer-col-2">
              <h4>Location</h4>

              <p>Colombo</p>
            </div>
            <div className="footer-col-3">
              <h4>Business Hours</h4>
              <p>7.00 a.m to 11.00 p.m</p>
            </div>
            <div className="footer-col-4">
              <h4>follow us</h4>
              <div className="social">
                <div className="element-1">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </div>
                <div className="element-2">
                  <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
