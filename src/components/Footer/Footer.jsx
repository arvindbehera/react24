import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-column">
          <h4 className="footer-menu-heding">Company Info</h4>
          <ul className="footer-menu-items">
            <li>About</li>
            <li>Social Responsibility</li>
            <li>Affiliate</li>
            <li>Fashion Blogger</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-menu-heding">Help & Support</h4>
          <ul className="footer-menu-items">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>How to Order</li>
            <li>Size Chart</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-menu-heding">Customer Care</h4>
          <ul className="footer-menu-items">
            <li>Contact Us</li>
            <li>Payment</li>
            <li>Bonus Point</li>
            <li>Notices</li>
          </ul>
        </div>
        <div className="footer-column last-column">
          <h4 className="footer-menu-heding">Socials</h4>
          <div className="icon-group">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fa-solid fa-bell"></i>
          </div>
          {/* <div className="icon-group">
            <i className="fab fa-android"></i>
            <i className="fa-brands fa-apple"></i>
          </div> */}
          <h4 className="footer-menu-heding signup">Sign Up</h4>
          <div className="subscribe-section">
            <input
              type="text"
              placeholder="Your email"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <p className="footer-policy">
            By clicking the SUBSCRIBE button, you are agreering to our Privacy &
            Cookies Policy
          </p>
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column">
          <p className="footer-copyright">2010-2022 All Right Reserved</p>
          <ul className="footer-copyright-lists">
            <li>
              <a href="#">Privacy Center</a>
            </li>
            <li>
              <a href="#">Privacy & Cookie Policy</a>
            </li>
            <li>
              <a href="#">Manage Cookies</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Copyright Notice</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-payment">
          <h4 className="footer-payment-options">We Accept</h4>
          <span>G-Pay</span>
          <span>American Express</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
