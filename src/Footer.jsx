import "../src/assets/css/Footer.css";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-start">
        <h3>About Us</h3>
        <p>React's declarative programming style makes it easier to build interactive UIs by defining how the UI should look for a given state, and React handles the updates efficiently.</p>
      </div>

      <div className="footer-section-3">
        <div className="footer-section-2">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section-2">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section-2">
          <h3>Contact</h3>
          <ul>
            <li>Email: gevinduobeysekera@gmail.com</li>
            <li>Phone: +94 783600 297</li>
            <li>Address: 72/a, Jayapurawatte, Kuddamaduwa, Piliyandala</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}
