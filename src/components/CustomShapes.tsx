import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DivwNodeB1cf2f60517654ff from "./DivwNodeB1cf2f60517654ff";
import styles from "./CustomShapes.module.css";

const CustomShapes: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDivwNodeB1cf2f60517654ffContainerClick = useCallback(() => {
    navigate("/ai-chatbot");
  }, [navigate]);

  const onDivwNodeB1cf2f60517654ffContainer2Click = useCallback(() => {
    navigate("/indicator-search");
  }, [navigate]);

  return (
    <div className={styles.customShapes}>
      <div className={styles.divsectionHeroNew}>
        <div className={styles.proximitySensor}>
          <div className={styles.shapeBlending}>
            <div className={styles.alignmentTools}>
              <div className={styles.introductionToThis}>
                Introduction to this AI tool
              </div>
              <div className={styles.patternLibrary}>
                <div className={styles.moreIntroductionContentContainer}>
                  <p className={styles.moreIntroductionContent}>
                    More introduction content could be added here.....
                  </p>
                  <p className={styles.p}>
                    ...........................................
                  </p>
                  <p className={styles.p1}>
                    ...................................
                  </p>
                </div>
                <div className={styles.customPropertiesParent}>
                  <div className={styles.customProperties}>
                    <button className={styles.button}>
                      <div className={styles.seeADemo}>See a Demo</div>
                    </button>
                  </div>
                  <button className={styles.link}>
                    <div className={styles.instructions}>Instructions</div>
                  </button>
                </div>
              </div>
              <div className={styles.divwNodeB1cf2f60517654ffWrapper}>
                <DivwNodeB1cf2f60517654ff
                  aIAnalytics="AI Analytics​"
                  onDivwNodeB1cf2f60517654ffContainerClick={
                    onDivwNodeB1cf2f60517654ffContainerClick
                  }
                />
              </div>
            </div>
            <div className={styles.circlePoints}>
              <div className={styles.circlePointsInner}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <img
                    className={styles.divheroNewButtonIcon}
                    loading="lazy"
                    alt=""
                    src="/divheronewbutton@2x.png"
                  />
                </div>
              </div>
              <DivwNodeB1cf2f60517654ff
                aIAnalytics="Indicators"
                propMarginLeft="-501.9px"
                onDivwNodeB1cf2f60517654ffContainerClick={
                  onDivwNodeB1cf2f60517654ffContainer2Click
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.divheroBottomBar}>
          <img
            className={styles.ce505fa3fb3e25c0c62b4Dots20bIcon}
            alt=""
            src="/654ce505fa3fb3e25c0c62b4-dots20background20patternsvg-fill@2x.png"
          />
          <div className={styles.pathSymbols}>
            <div className={styles.learnMoreAboutOurPartnersParent}>
              <div className={styles.learnMoreAbout}>
                Learn more about our partners
              </div>
              <div className={styles.circleEffects}>
                <img
                  className={styles.c3f91ef46aad9e42fYotposvgIcon}
                  loading="lazy"
                  alt=""
                  src="/6556297c3f91ef46aad9e42f-yotposvg@2x.png"
                />
                <div className={styles.clipPathGroupWrapper}>
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.c0e59cb674f892791KlaviyosvgIcon}
              loading="lazy"
              alt=""
              src="/6556297c0e59cb674f892791-klaviyosvg@2x.png"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.a8b6d87abe5610ecd78CheveronRWrapper}>
              <img
                className={styles.a8b6d87abe5610ecd78CheveronRIcon}
                alt=""
                src="/65562a8b6d87abe5610ecd78-cheveronrightwhitesvg.svg"
              />
            </div>
            <div className={styles.b05974f5b20411210AttentivesvParent}>
              <img
                className={styles.b05974f5b20411210AttentivesvIcon}
                loading="lazy"
                alt=""
                src="/6556297b05974f5b20411210-attentivesvg@2x.png"
              />
              <img
                className={styles.cfadaec9c4d369842ShopifysvgIcon}
                loading="lazy"
                alt=""
                src="/6556297cfadaec9c4d369842-shopifysvg.svg"
              />
              <img
                className={styles.fb00bd5f04e20aa8e36GeorgiassIcon}
                loading="lazy"
                alt=""
                src="/65654fb00bd5f04e20aa8e36-georgiassvg@2x.png"
              />
              <img
                className={styles.c972f146948f7aaa8SmilesvgIcon}
                loading="lazy"
                alt=""
                src="/6556297c972f146948f7aaa8-smilesvg@2x.png"
              />
              <img
                className={styles.d7504a1a52b30a797AdobesvgIcon}
                loading="lazy"
                alt=""
                src="/6556297d7504a1a52b30a797-adobesvg@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomShapes;
