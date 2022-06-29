import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import styles from "./IssueList.module.css";
const IssueList = () => {
  const [issues, setIssues] = useState([]);

  const getIssue = async () => {
    let res = await fetch("https://api.github.com/repos/facebook/react/issues");
    let data = await res.json();
    console.log(data);
    setIssues(data);
  };

  useEffect(() => {
    getIssue();
  }, []);

  const items = issues.map((item) => {
    let date = new Date(item.created_at);
    date = date.getDate();
    return (
      <div key={item.node_id} className={styles.issueItems}>
        <div className={styles.title}>
          <div className={styles.title}>
            <div>
              <FontAwesomeIcon icon={faCircleDot} color="green" />
            </div>
            <div>
              <h4>{item.title}</h4>
            </div>
            <div>
              {item.labels.map((label) => {
                return (
                  <span
                    style={{
                      backgroundColor: `#${label.color}`,
                      borderRadius: "10px",
                      padding: "2px",
                      margin:'2px'
                    }}
                    key={label.id}
                  >
                    {label.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className={styles.comments}>
            <FontAwesomeIcon icon={faCommentAlt} /> {item.comments}
          </div>
        </div>
        <div className={styles.description}>
          <p>#{item.number} opened on {date} Jun by {item.user.login}</p>
        </div>
      </div>
    );
  });

  return <div>{items}</div>;
};

export default IssueList;
