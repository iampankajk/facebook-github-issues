import IssueList from "../IssueList/IssueList";
import IssueNav from "../IssueNav/IssueNav";
import styles from "./IssueCard.module.css";
const IssueCard = ()=>{
    return(
        <div className={styles.card}>
            <IssueNav/>
            <IssueList/>
        </div>
    );
};

export default IssueCard;