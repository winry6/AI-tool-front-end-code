import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MainSectionListListit2.module.css";

export type MainSectionListListit2Type = {
  divintegrationBackground?: string;
  magento?: string;
  magentoEmpowersThousandsO?: string;
  retailersAndBrandsWithThe?: string;
  eCommercePlatformsAndFlex?: string;
  cloudSolutionsToRapidlyIn?: string;
  grow?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
  propWidth1?: CSSProperties["width"];
};

const MainSectionListListit2: FunctionComponent<MainSectionListListit2Type> = ({
  divintegrationBackground,
  magento,
  magentoEmpowersThousandsO,
  retailersAndBrandsWithThe,
  eCommercePlatformsAndFlex,
  cloudSolutionsToRapidlyIn,
  grow,
  propPadding,
  propWidth,
  propAlignSelf,
  propOverflow,
  propWidth1,
}) => {
  const mainSectionListListit1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divintegrationBackgroundIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      overflow: propOverflow,
    };
  }, [propWidth, propAlignSelf, propOverflow]);

  const magentoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={styles.mainSectionListListit}
      style={mainSectionListListit1Style}
    >
      <img
        className={styles.divintegrationBackgroundIcon}
        alt=""
        src={divintegrationBackground}
        style={divintegrationBackgroundIconStyle}
      />
      <div className={styles.magento} style={magentoStyle}>
        {magento}
      </div>
      <div className={styles.magentoEmpowersThousandsContainer}>
        <p className={styles.magentoEmpowersThousands}>
          {magentoEmpowersThousandsO}
        </p>
        <p className={styles.retailersAndBrands}>{retailersAndBrandsWithThe}</p>
        <p className={styles.ecommercePlatformsAnd}>
          {eCommercePlatformsAndFlex}
        </p>
        <p className={styles.cloudSolutionsTo}>{cloudSolutionsToRapidlyIn}</p>
        <p className={styles.grow}>{grow}</p>
      </div>
    </div>
  );
};

export default MainSectionListListit2;
