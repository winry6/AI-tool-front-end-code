import { FunctionComponent } from "react";
import MainSectionListListit1 from "./MainSectionListListit1";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.mainSectionLoyaltyRewarParent}>
      <h3 className={styles.mainSection}>Education</h3>
      <div className={styles.mainSectionListListitParent}>
        <MainSectionListListit1
          divintegrationBackground="/divintegrationbackground-1@2x.png"
          yotpo="Yotpo"
          yotpoIsOneOfTheIndustryLe="Yotpo is one of the industry leaders in"
          customerReviewsRewardsUGC="customer reviews, rewards, UGC, and"
          more="more."
        />
        <MainSectionListListit1
          divintegrationBackground="/divintegrationbackground-2@2x.png"
          yotpo="Smile"
          yotpoIsOneOfTheIndustryLe="Maximize your customer acquisition"
          customerReviewsRewardsUGC="efforts and turn transactional sales"
          more="into passionate brand advocates."
          propWidth="49.7px"
        />
        <MainSectionListListit1
          divintegrationBackground="/divintegrationbackground-9.svg"
          yotpo="LoyaltyLion"
          yotpoIsOneOfTheIndustryLe="Build longer-term customer"
          customerReviewsRewardsUGC="relationships and deliver a fully"
          more="customized loyalty program."
          propWidth="102.9px"
        />
        <div className={styles.mainSectionListListit}>
          <img
            className={styles.divintegrationBackgroundIcon}
            alt=""
            src="/divintegrationbackground-10.svg"
          />
          <div className={styles.stamped}>Stamped</div>
          <div className={styles.stampedioIsAnContainer}>
            <p className={styles.stampedioIsAn}>Stamped.io is an AI-powered</p>
            <p className={styles.ecommerceMarketingPlatform}>
              eCommerce marketing platform that
            </p>
            <p className={styles.enablesMerchantsTo}>
              enables merchants to make
            </p>
            <p className={styles.meaningfulConnectionsWith}>
              meaningful connections with
            </p>
            <p className={styles.customersKeepThem}>
              customers, keep them engaged, and
            </p>
            <p className={styles.rewardThemFor}>reward them for shopping.</p>
          </div>
        </div>
      </div>
      <button className={styles.mainSectionLink}>
        <div className={styles.viewMore}>View More</div>
      </button>
    </div>
  );
};

export default FrameComponent5;
