import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent5 from "../components/FrameComponent5";
import MainSection1 from "../components/MainSection1";
import styles from "./IndicatorSearch.module.css";

const IndicatorSearch: FunctionComponent = () => {
  return (
    <div className={styles.indicatorSearch}>
      <FrameComponent3 />
      <section className={styles.formEmailForm}>
        <div className={styles.inputSearchIntegrationOrCa}>
          <FrameComponent2 />
          <FrameComponent4 />
        </div>
      </section>
      <section className={styles.indicatorSearchInner}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <FrameComponent5 />
        </div>
      </section>
      <MainSection1 />
    </div>
  );
};

export default IndicatorSearch;
