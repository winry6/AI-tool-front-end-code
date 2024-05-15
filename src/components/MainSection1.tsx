import { FunctionComponent } from "react";
import styles from "./MainSection1.module.css";

const MainSection1: FunctionComponent = () => {
  return (
    <footer className={styles.mainSection}>
      <div className={styles.heading2JoinTheRevolutioParent}>
        <div className={styles.heading2}>Join the AI revolution</div>
        <div className={styles.betterDataBetter}>Better data, better life</div>
      </div>
      <div className={styles.mainSectionInner}>
        <div className={styles.buttonParent}>
          <button className={styles.button}>
            <div className={styles.seeADemo}>See a Demo</div>
          </button>
          <button className={styles.link}>
            <div className={styles.exploreSolutions}>Explore Solutions</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default MainSection1;
