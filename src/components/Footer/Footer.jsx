import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__socialIcons__list">
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="Footer__socialIcons  Footer__socialIcons--hover"
          />
        </a>
        <a href="https://www.snapchat.com/">
          <FontAwesomeIcon
            icon={faSnapchat}
            className="Footer__socialIcons Footer__socialIcons--hover"
          />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon
            icon={faTwitter}
            className="Footer__socialIcons Footer__socialIcons--hover"
          />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            className="Footer__socialIcons Footer__socialIcons--hover"
          />
        </a>
      </div>
      <div className="Footer__listContainer">
        <ul className="Footer__list">
          <li className="listFooterItem">
            <a href="#">Home</a>
          </li>
          <li className="listFooterItem">
            <a href="#">Services</a>
          </li>
          <li className="listFooterItem">
            <a href="#">About</a>
          </li>
          <li className="listFooterItem">
            <a href="#">Terms</a>
          </li>
          <li className="listFooterItem">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="copytightContainer">
        <p className="copyright">Tutti Frutti © 2012</p>
      </div>
    </footer>
  );
}
