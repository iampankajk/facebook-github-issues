import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ()=>{
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <div className={styles.filters}>Filters</div>
                    <div className={styles.input}>
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
                        <input value="issue open"></input>
                    </div>
                </div>
                <div className={styles.labelMile}>
                    <a href="#" className={styles.labels}>Labels</a>
                    <a href="#" className={styles.milestones}>Milestones</a>
                </div>
            </div>
            <a href="#" className={styles.newIssue}>New Issue</a>
        </div>
    );
};

export default Search;

