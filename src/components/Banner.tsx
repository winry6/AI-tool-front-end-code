import { FunctionComponent } from "react";
import styles from "./Banner.module.css";

const Banner: FunctionComponent = () => {
  return (
    <header className={styles.banner}>
      <div className={styles.inputOutput}>
        <img
          className={styles.link64f099a414828ebfdad821b}
          loading="lazy"
          alt=""
          src="/link--64f099a414828ebfdad821b3-tandymlogowhitesvg@2x.png"
        />
      </div>
      <div className={styles.mathOperations}>
        <div className={styles.controlStructures}>
          <div className={styles.navigationButton}>HOME</div>
          <div className={styles.navigationButton1}>ABOUT</div>
          <div className={styles.navigationLink}>CONTACT</div>
        </div>
      </div>
      <div className={styles.variableStorage}>
        <div className={styles.navigationLink1}>PARTNERS</div>
      </div>
      <div className={styles.connectionHandler}>
        <div className={styles.formEmailForm}>
          <div className={styles.input}>
            <div className={styles.shapeTransforms}>
              <div className={styles.ff28bdd4789194469e54f9SearchParent}>
                <img
                  className={styles.ff28bdd4789194469e54f9SearchIcon}
                  alt=""
                  src="/64ff28bdd4789194469e54f9-searchsvg.svg"
                />
                <div className={styles.searchIntegrationOr}>
                  Search Integration or Category
                </div>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.clear}>Clear</div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.navigationButtonMenu}>
        <div className={styles.signIn}>Sign In</div>
      </button>
      <button className={styles.navigationButton2}>
        <div className={styles.logIn}>Log in</div>
      </button>
    </header>
  );
};

export default Banner;
