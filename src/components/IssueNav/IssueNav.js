import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot} from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./IssueNav.module.css";
const IssueNav = ()=>{
    return(
        <div className={styles.nav}>
            <div className={styles.icon}>
                <span><FontAwesomeIcon icon={faCircleDot}/> 711 Open</span>
                <span><FontAwesomeIcon icon={faCheck}/> 10,811 closed</span>
            </div>
            <div className={styles.list}>
                <div><select><option>Author</option></select></div>
                <div><select><option>Label</option></select></div>
                <div><select><option>Projects</option></select></div>
                <div><select><option>Milestones</option></select></div>
                <div><select><option>Assinee</option></select></div>
                <div><select><option>Sort</option></select></div>
            </div>
        </div>
    );
};

export default IssueNav;