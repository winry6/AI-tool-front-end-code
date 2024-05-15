import { FunctionComponent } from "react";
import styles from "./MainSection.module.css";

const MainSection: FunctionComponent = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.heading2JoinTheRevolutioParent}>
        <div className={styles.heading2}>Join the AI revolution</div>
        <div className={styles.betterDataBetter}>Better data, better life</div>
      </div>
      <div className={styles.mainSectionInner}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.seeADemo}>See a Demo</div>
          </div>
          <div className={styles.link}>
            <div className={styles.exploreSolutions}>Explore Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
