import React, { useEffect, useState } from "react";
import styles from "./CardContainer.module.css";
import { MultiCard } from "./MultiCard";

export const StoryCardContainer = ({
  selectedValue,
  minimumInvestments,
  showMulti,
  multiCardPosition,
  multiCardInvestment,
  xirr,
  logoImageUrl,

  multixirr,
  multitenure,
  tenure,
}) => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);
  const cards = [];

  for (let i = 0; i < parseInt(selectedValue); i++) {
    if (showMulti && i === parseInt(multiCardPosition) - 1) {
      cards.push(
        <MultiCard
          key="multiCard"
          multiCardInvestment={multiCardInvestment}
          minimumInvestment={
            minimumInvestments[parseInt(multiCardPosition) - 1]
          }
          cards={cards}
          multixirr={multixirr}
          multitenure={multitenure}
        />
      );
    } else {
      cards.push(
        <div
          key={i}
          className={`${styles.DailyDeal} ${styles.StoryDailyDeal}`}
        >
          <div
            className={`${styles.Frame1171276195} ${
              selectedValue === "2" ? styles.Frame1171276195For2Cards : ""
            }`}
          >
            <img
              className={styles.Image48499}
              src={logoImageUrl[i]}
              alt="Placeholder"
            />
          </div>
          <div className={styles.Frame1171276264}>
            <div className={styles.Frame1171276253}>
              <div className={styles.Frame1116603263}>
                <div className={styles.Xirr}>xirr</div>
              </div>
              <div className={styles.XirrValue}>{xirr[i]}%</div>
            </div>
            <div className={styles.Frame1171276186}>
              <div className={styles.Frame1171276254}>
                <div className={styles.Frame1171276266}>
                  <div className={styles.Days}>{tenure[i]} days</div>
                </div>
              </div>
            </div>
            <div className={styles.Frame1171276252}>
              <div className={styles.Frame1116603263}>
                <div className={styles.MinInvestment}>MIN INVESTMENT</div>
              </div>
              <div className={styles.MinInvestmentNumber}>
                {new Intl.NumberFormat("en-IN").format(minimumInvestments[i])}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className={styles.StoryDailyDealsCreative}>
      <div className={styles.StoryMainFrame}>
        <div className={`${styles.Header} ${styles.StoryHeader}`}>
          <div
            className={`${styles.InvoiceDiscountingDeals} ${styles.StoryInvoiceDiscountingDeals}`}
          >
            Invoice Discounting Deals
          </div>
          <div className={styles.June20}>{currentDate}</div>
        </div>
        <div className={`${styles.Body} ${styles.StoryBody}  ${
              selectedValue === "2" ? styles.StoryBodyFor2 : styles.StoryBody
            }`}>
          <div className={styles.AllDeals}>
            <div
              className={`${styles.AllDealCards} ${styles.StoryAllDealCards}`}
            >
              {cards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
