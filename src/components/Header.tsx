import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <input className={styles.navListItem} type="text" />
      <div className={styles.fRAME}>
        <div className={styles.fRAME1}>
          <img
            className={styles.linkHomeImage}
            loading="lazy"
            alt=""
            src="/link--home--image.svg"
          />
          <div className={styles.fRAME2}>
            <div className={styles.navList}>Site Menu</div>
            <div className={styles.link}>
              <div className={styles.frameParent}>
                <div className={styles.navListItemParent}>
                  <div className={styles.navListItem1} />
                  <div className={styles.navListItemListIte}>
                    <div className={styles.home}>Home</div>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.navListItem2} />
                  <div className={styles.navListItemListIteWrapper}>
                    <div className={styles.navListItemListIte1}>
                      <div className={styles.fRAME3}>
                        <div className={styles.aboutUs}>About us</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.navListItemListIteContainer}>
                  <div className={styles.navListItemListIte2}>
                    <div className={styles.ourPartners}>Our Partners</div>
                  </div>
                </div>
                <div className={styles.navListItemListIteFrame}>
                  <div className={styles.navListItemListIte3}>
                    <div className={styles.indicators}>Indicators</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.navListItemListIte4}>
                    <div className={styles.dashboard}>Dashboard</div>
                  </div>
                </div>
                <div className={styles.navListItemListIteWrapper1}>
                  <div className={styles.navListItemListIte5}>
                    <div className={styles.howToUse}>How to use the tool</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navList1}>Data Analysis Assistants</div>
            <div className={styles.fRAMEInner}>
              <div className={styles.fRAMEParent}>
                <div className={styles.fRAME4}>
                  <div className={styles.navListItemGroup}>
                    <div className={styles.navListItem3} />
                    <div className={styles.navListItemListIte6}>
                      <div className={styles.settings}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.navListItemListIteParent}>
                  <div className={styles.navListItemListIte7}>
                    <div className={styles.setting1Wrapper}>
                      <div className={styles.setting1}>Setting 1</div>
                    </div>
                  </div>
                  <div className={styles.navListItemListIte8}>
                    <div className={styles.setting2Wrapper}>
                      <div className={styles.setting2}>Setting 2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <img
              className={styles.iconLeading}
              loading="lazy"
              alt=""
              src="/icon-leading.svg"
            />
            <div className={styles.showCodeWrapper}>
              <div className={styles.showCode}>{`Show Code `}</div>
            </div>
            <img
              className={styles.iconTrailing}
              alt=""
              src="/icon-trailing.svg"
            />
          </div>
        </div>
        <button className={styles.button1}>
          <div className={styles.buttonBase1}>
            <img
              className={styles.iconLeading1}
              alt=""
              src="/icon-leading.svg"
            />
            <div className={styles.showCodeContainer}>
              <div className={styles.showCode1}>{`Show Prompt `}</div>
            </div>
            <img
              className={styles.iconTrailing1}
              alt=""
              src="/icon-trailing.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
