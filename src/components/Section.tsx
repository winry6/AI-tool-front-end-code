import { FunctionComponent } from "react";
import styles from "./Section.module.css";

const Section: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.listGroup33Parent}>
              <img
                className={styles.listGroup33}
                alt=""
                src="/list--group--3--3@2x.png"
              />
              <img
                className={styles.listGroup23}
                alt=""
                src="/list--group--2--3@2x.png"
              />
            </div>
            <div className={styles.listGroup13}>
              <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
              <div className={styles.sampleStoryDescriptionContainer}>
                <span className={styles.sampleStoryDescriptionContainer1}>
                  <p className={styles.sampleStoryDescription}>
                    Sample story description
                  </p>
                  <p className={styles.p}>
                    .............................................................................................
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.heading2MerchantFirstMinParent}>
                <div className={styles.heading2}>Read our story about:</div>
                <div className={styles.sampleStory}>
                  Sample story....................
                </div>
              </div>
              <div className={styles.buttonPreviousSlideParent}>
                <img
                  className={styles.buttonPreviousSlide}
                  alt=""
                  src="/button--previous-slide.svg"
                />
                <img
                  className={styles.buttonNextSlide}
                  alt=""
                  src="/button--next-slide.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainInner}>
          <div className={styles.frameDiv}>
            <div className={styles.divtrsutpilotHeaderLineWrapper}>
              <div className={styles.divtrsutpilotHeaderLine} />
            </div>
            <div className={styles.launchedFunctions}>Launched functions</div>
            <div className={styles.divtrsutpilotHeaderLineContainer}>
              <div className={styles.divtrsutpilotHeaderLine1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
