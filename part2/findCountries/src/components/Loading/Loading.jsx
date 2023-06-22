import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <p>Loading Countries...</p>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loading;
