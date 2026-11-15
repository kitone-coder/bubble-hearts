import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">Bubble Hearts School</p>
          <p>A caring, joyful and safe kindergarten in Nairobi, Kenya.</p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programmes">Programmes</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/fees">Fees</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ul>
            <li>Nairobi, Kenya</li>
            <li><a href="tel:+254719719178">0719 719 178</a></li>
            <li><Link to="/contact">Send an enquiry</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; 2026 Bubble Hearts School. All rights reserved.</p>
    </footer>
  );
}
