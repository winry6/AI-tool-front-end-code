import { FunctionComponent } from "react";
import MainSectionListListit from "./MainSectionListListit";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.smile}>
      <h3 className={styles.mainSection}>Agriculture house holds</h3>
      <div className={styles.listItemPlatforms}>
        <MainSectionListListit
          divintegrationBackground="/divintegrationbackground@2x.png"
          klaviyo="Klaviyo"
          klaviyoOffersAnSMSAndEmai="Klaviyo offers an SMS and email"
          marketingAutomationPlatfo="marketing automation platform for"
          eCommerce="eCommerce."
        />
        <MainSectionListListit
          divintegrationBackground="/divintegrationbackground-1@2x.png"
          klaviyo="Yotpo"
          klaviyoOffersAnSMSAndEmai="Yotpo is one of the industry leaders in"
          marketingAutomationPlatfo="customer reviews, rewards, UGC, and"
          eCommerce="more."
          propPadding="var(--padding-mid) var(--padding-base) var(--padding-57xl)"
          propBoxShadow="11px 11px 0px rgba(0, 0, 0, 0.09)"
          propDisplay="flex"
          propMinWidth="unset"
          propWidth="51.5px"
        />
        <MainSectionListListit
          divintegrationBackground="/divintegrationbackground-2@2x.png"
          klaviyo="Smile"
          klaviyoOffersAnSMSAndEmai="Maximize your customer acquisition"
          marketingAutomationPlatfo="efforts and turn transactional sales"
          eCommerce="into passionate brand advocates."
          propPadding="var(--padding-mid) var(--padding-base) var(--padding-57xl)"
          propBoxShadow="11px 11px 0px rgba(0, 0, 0, 0.09)"
          propDisplay="flex"
          propMinWidth="unset"
          propWidth="49.7px"
        />
        <MainSectionListListit
          divintegrationBackground="/divintegrationbackground-3@2x.png"
          klaviyo="Shopify"
          klaviyoOffersAnSMSAndEmai="Shopify is a commerce platform that"
          marketingAutomationPlatfo="allows anyone to set up an online store"
          eCommerce="and sell their products."
          propPadding="var(--padding-mid) var(--padding-sm) var(--padding-57xl) var(--padding-mid)"
          propBoxShadow="11px 11px 0px rgba(0, 0, 0, 0.09)"
          propDisplay="inline-block"
          propMinWidth="67.2px"
          propWidth="unset"
        />
      </div>
      <button className={styles.mainSectionLink}>
        <div className={styles.viewMore}>View More</div>
      </button>
    </div>
  );
};

export default FrameComponent4;
