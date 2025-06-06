import styles from './Footer.module.css';
import youtubeIcon from '../../assets/youtube_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import facebookIcon from '../../assets/facebook_icon.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <img src={facebookIcon} alt="Social media icons" />
        <img src={instagramIcon} alt="Social media icons" />
        <img src={twitterIcon} alt="Social media icons" />
        <img src={youtubeIcon} alt="Social media icons" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cooke Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className={styles.copyright_text}>
        &copy; 1997-2025 Netflix, Inc.
      </p>
    </div>
  );
}

export default Footer;
