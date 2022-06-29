import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBell,
  faStar,
  faCodeFork,
  faFileCode,
  faCodePullRequest,
  faPlay,
  faBookOpen,
  faShieldHalved,
  faChartLine,
  faChartColumn,
  faCircleDot
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <div>
          <FontAwesomeIcon
            icon={faBook}
            color="grey"
            className={styles.element}
          />
          <a href="#" className={styles.facebook}>
            facebook
          </a>
          <span className={styles.span}>/</span>
          <a href="#" className={styles.react}>
            react
          </a>
          <span className={styles.span}>
            <span>Public</span>
          </span>
        </div>
        <div>
          <div className={styles.titleList}>
            <span className={styles.icons}>
              <FontAwesomeIcon icon={faBell} className={styles.element} />
              Notification
            </span>
            <span className={styles.text}>6639</span>
          </div>
          <div className={styles.titleList}>
            <span className={styles.icons}>
              <FontAwesomeIcon icon={faStar} className={styles.element} />
              Star
            </span>
            <span className={styles.text}>175k</span>
          </div>
          <div className={styles.titleList}>
            <span className={styles.icons}>
              <FontAwesomeIcon icon={faCodeFork} className={styles.element} />
              Fork
            </span>
            <span className={styles.text}>35.3k</span>
          </div>
        </div>
      </div>
      <div className={styles.code}>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon
            icon={faFileCode}
            className={styles.codeIcon}
          />
          <a href="#">Code</a>
          <span>253</span>
        </div>
        <div className={styles.codeTitle}>
        <FontAwesomeIcon icon={faCircleDot} className={styles.codeIcon} />
          <a href="#">Issues</a>
          <span>625</span>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon
            icon={faCodePullRequest}
            className={styles.codeIcon}
          />
          <a href="#">Pull request</a>
          <span>208</span>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon icon={faPlay} className={styles.codeIcon} />
          <a href="#">Actions</a>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon icon={faChartColumn} className={styles.codeIcon} />
          <a href="#">Projects</a>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon icon={faBookOpen} className={styles.codeIcon} />
          <a href="#">Wiki</a>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon icon={faShieldHalved} className={styles.codeIcon} />
          <a href="#">Security</a>
        </div>
        <div className={styles.codeTitle}>
          <FontAwesomeIcon icon={faChartLine} className={styles.codeIcon} />
          <a href="#">Insights</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
