import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MainSectionListListit.module.css";

export type MainSectionListListitType = {
  divintegrationBackground?: string;
  klaviyo?: string;
  klaviyoOffersAnSMSAndEmai?: string;
  marketingAutomationPlatfo?: string;
  eCommerce?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const MainSectionListListit: FunctionComponent<MainSectionListListitType> = ({
  divintegrationBackground,
  klaviyo,
  klaviyoOffersAnSMSAndEmai,
  marketingAutomationPlatfo,
  eCommerce,
  propPadding,
  propBoxShadow,
  propDisplay,
  propMinWidth,
  propWidth,
}) => {
  const mainSectionListListitStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      boxShadow: propBoxShadow,
    };
  }, [propPadding, propBoxShadow]);

  const klaviyoStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  return (
    <div
      className={styles.mainSectionListListit}
      style={mainSectionListListitStyle}
    >
      <img
        className={styles.divintegrationBackgroundIcon}
        loading="lazy"
        alt=""
        src={divintegrationBackground}
      />
      <div className={styles.klaviyo} style={klaviyoStyle}>
        {klaviyo}
      </div>
      <div className={styles.klaviyoOffersAnContainer}>
        <p className={styles.klaviyoOffersAn}>{klaviyoOffersAnSMSAndEmai}</p>
        <p className={styles.marketingAutomationPlatform}>
          {marketingAutomationPlatfo}
        </p>
        <p className={styles.ecommerce}>{eCommerce}</p>
      </div>
    </div>
  );
};

export default MainSectionListListit;
