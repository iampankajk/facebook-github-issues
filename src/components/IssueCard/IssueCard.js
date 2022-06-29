import IssueList from "../IssueList/IssueList";
import styles from "./IssueCard.module.css";
const IssueCard = ()=>{
    return(
        <div className={styles.card}>
            <IssueList/>
        </div>
    );
};

export default IssueCard;