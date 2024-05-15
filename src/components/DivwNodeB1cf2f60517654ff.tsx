import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DivwNodeB1cf2f60517654ff.module.css";

export type DivwNodeB1cf2f60517654ffType = {
  aIAnalytics?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];

  /** Action props */
  onDivwNodeB1cf2f60517654ffContainerClick?: () => void;
};

const DivwNodeB1cf2f60517654ff: FunctionComponent<
  DivwNodeB1cf2f60517654ffType
> = ({
  aIAnalytics,
  propMarginLeft,
  onDivwNodeB1cf2f60517654ffContainerClick,
}) => {
  const divwNodeB1cf2f60517654ffStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={styles.divwNodeB1cf2f60517654ff}
      onClick={onDivwNodeB1cf2f60517654ffContainerClick}
      style={divwNodeB1cf2f60517654ffStyle}
    >
      <div className={styles.aiAnalytics}>{aIAnalytics}</div>
      <div className={styles.starPoints}>
        <div className={styles.introductionOfThis}>
          Introduction of this function
        </div>
      </div>
      <div className={styles.p} />
    </div>
  );
};

export default DivwNodeB1cf2f60517654ff;
