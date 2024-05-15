import { FunctionComponent } from "react";
import MainSectionListListit from "./MainSectionListListit";
import MainSectionListListit2 from "./MainSectionListListit2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.mainSectionPlatformParent}>
      <h3 className={styles.mainSection}>Popular Census</h3>
      <div className={styles.mainSectionListListitParent}>
        <MainSectionListListit
          divintegrationBackground="/divintegrationbackground-4@2x.png"
          klaviyo="Shopify"
          klaviyoOffersAnSMSAndEmai="Shopify is a commerce platform that"
          marketingAutomationPlatfo="allows anyone to set up an online store"
          eCommerce="and sell their products."
          propPadding="var(--padding-mid) var(--padding-sm) var(--padding-57xl) var(--padding-mid)"
          propBoxShadow="unset"
          propDisplay="inline-block"
          propMinWidth="67.2px"
          propWidth="unset"
        />
        <MainSectionListListit2
          divintegrationBackground="/divintegrationbackground-5.svg"
          magento="Magento"
          magentoEmpowersThousandsO="Magento empowers thousands of"
          retailersAndBrandsWithThe="retailers and brands with the best"
          eCommercePlatformsAndFlex="eCommerce platforms and flexible"
          cloudSolutionsToRapidlyIn="cloud solutions to rapidly innovate and"
          grow="grow."
        />
        <MainSectionListListit2
          divintegrationBackground="/divintegrationbackground-6@2x.png"
          magento="Adobe Commerce"
          magentoEmpowersThousandsO="Adobe Commerce is a flexible and"
          retailersAndBrandsWithThe="scalable commerce platform that lets"
          eCommercePlatformsAndFlex="you create uniquely personalized B2C"
          cloudSolutionsToRapidlyIn="experiences, no matter how many"
          grow="brands you have."
          propPadding="var(--padding-mid) var(--padding-base) var(--padding-9xl)"
          propWidth="unset"
          propAlignSelf="stretch"
          propOverflow="hidden"
          propWidth1="156.9px"
        />
        <div className={styles.mainSectionListListit}>
          <div className={styles.divintegrationBackground}>
            <img
              className={styles.ff79f4bb5ae1076796402cSalesfoIcon}
              loading="lazy"
              alt=""
              src="/64ff79f4bb5ae1076796402c-salesforce20commercecloudpng@2x.png"
            />
          </div>
          <div className={styles.salesforceCommercecloud}>
            Salesforce CommerceCloud
          </div>
          <div className={styles.salesforceCommerceCloudContainer}>
            <p className={styles.salesforceCommerceCloud}>
              Salesforce Commerce Cloud
            </p>
            <p className={styles.empowersYouTo}>
              empowers you to create seamless
            </p>
            <p className={styles.ecommerceExperiencesThat}>
              eCommerce experiences that inspire
            </p>
            <p className={styles.andConvertTodays}>
              and convert today's connected
            </p>
            <p className={styles.shoppers}>shoppers.</p>
          </div>
        </div>
      </div>
      <button className={styles.mainSectionLink}>
        <div className={styles.viewMore}>View More</div>
      </button>
    </div>
  );
};

export default FrameComponent1;
