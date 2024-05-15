import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.indicatorSearchInner}>
      <header className={styles.frameParent}>
        <div className={styles.link623f870c6b70a78281ebadbWrapper}>
          <img
            className={styles.link623f870c6b70a78281ebadb}
            loading="lazy"
            alt=""
            src="/link--623f870c6b70a78281ebadbe-tandymsvg@2x.png"
          />
        </div>
        <nav className={styles.frameWrapper}>
          <nav className={styles.navigationButtonMenuMerParent}>
            <div className={styles.navigationButton}>Home</div>
            <div className={styles.navigationButton1}>ABOUT</div>
            <div className={styles.navigationLink}>CONTACTS</div>
          </nav>
        </nav>
        <button className={styles.navigationButtonMenu}>
          <div className={styles.signIn}>Sign In</div>
        </button>
        <button className={styles.navigationButton2}>
          <div className={styles.logIn}>Log in</div>
        </button>
      </header>
    </section>
  );
};

export default FrameComponent3;
