import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftCon}>
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className={styles.rightCon}>
        <img src={searchIcon} alt="Search Icon" className={styles.icons} />
        <img src={bellIcon} alt="Bell Icon" className={styles.icons} />
        <AccountBoxIcon className={styles.profile} />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Navbar