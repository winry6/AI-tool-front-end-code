import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MainSectionListListit1.module.css";

export type MainSectionListListit1Type = {
  divintegrationBackground?: string;
  yotpo?: string;
  yotpoIsOneOfTheIndustryLe?: string;
  customerReviewsRewardsUGC?: string;
  more?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const MainSectionListListit1: FunctionComponent<MainSectionListListit1Type> = ({
  divintegrationBackground,
  yotpo,
  yotpoIsOneOfTheIndustryLe,
  customerReviewsRewardsUGC,
  more,
  propWidth,
}) => {
  const yotpoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.mainSectionListListit}>
      <img
        className={styles.divintegrationBackgroundIcon}
        alt=""
        src={divintegrationBackground}
      />
      <div className={styles.yotpo} style={yotpoStyle}>
        {yotpo}
      </div>
      <div className={styles.yotpoIsOneContainer}>
        <p className={styles.yotpoIsOne}>{yotpoIsOneOfTheIndustryLe}</p>
        <p className={styles.customerReviewsRewards}>
          {customerReviewsRewardsUGC}
        </p>
        <p className={styles.more}>{more}</p>
      </div>
    </div>
  );
};

export default MainSectionListListit1;
