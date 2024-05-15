import { FunctionComponent } from "react";
import Banner from "../components/Banner";
import CustomShapes from "../components/CustomShapes";
import FrameComponent from "../components/FrameComponent";
import Section from "../components/Section";
import MainSection from "../components/MainSection";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.conditionalLogic}>
        <div className={styles.bodyPaints} />
        <Banner />
        <CustomShapes />
        <FrameComponent />
        <Section />
        <MainSection />
      </main>
    </div>
  );
};

export default LandingPage;
