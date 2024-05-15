import { FunctionComponent } from "react";
import Header from "../components/Header";
import styles from "./AIChatbot.module.css";

const AIChatbot: FunctionComponent = () => {
  return (
    <div className={styles.aiChatbot}>
      <img
        className={styles.divabsoluteIcon}
        alt=""
        src="/divabsolute@2x.png"
      />
      <section className={styles.fRAME}>
        <Header />
        <div className={styles.divfixedParent}>
          <div className={styles.divfixed}>
            <div className={styles.divfixedInner}>
              <div className={styles.frameParent}>
                <div className={styles.divhiddenWrapper}>
                  <div className={styles.divhidden} />
                </div>
                <div className={styles.divhiddenParent}>
                  <div className={styles.divhidden1} />
                  <img
                    className={styles.buttonToggleDarkMode}
                    alt=""
                    src="/button--toggle-dark-mode.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.divabsolute} />
          </div>
          <div className={styles.mainArticleHeadingAPIdocs}>
            <div className={styles.mainArticleHeading1AParent}>
              <h2 className={styles.mainArticle}>
                Please select a section here:
              </h2>
              <div className={styles.populationCensusParent}>
                <div className={styles.populationCensus}>Population census</div>
                <div className={styles.abdabeecdcheveronrightwhitesvg}>
                  <img
                    className={styles.a8b6d87abe5610ecd78CheveronRIcon}
                    loading="lazy"
                    alt=""
                    src="/65562a8b6d87abe5610ecd78-cheveronrightwhitesvg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.linkWrapper}>
            <div className={styles.link}>
              <div className={styles.askMeA}>
                Ask me a question like: visualize the distribution of people by
                district
              </div>
              <div className={styles.send1Wrapper}>
                <img
                  className={styles.send1Icon}
                  loading="lazy"
                  alt=""
                  src="/send-1.svg"
                />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
