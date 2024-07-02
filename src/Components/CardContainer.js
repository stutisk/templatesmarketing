import React, { useEffect, useState } from "react";
import styles from "./CardContainer.module.css";
import { MultiCard } from "./MultiCard";

export const CardContainer = ({
  selectedValue,
  minimumInvestments,
  showMulti,
  multiCardPosition,
  multiCardInvestment,
  xirr,
  logoImageUrl,

  multixirr,
  multitenure,tenure
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
      console.log(`Inserting MultiCard at index ${i}`);
      cards.push(
        <MultiCard
          key="multiCard"
          multiCardInvestment={multiCardInvestment}
          minimumInvestment={
            minimumInvestments[parseInt(multiCardPosition) - 1]
          }
          
          multixirr={multixirr}
          multitenure={ multitenure}
        />
      );
    } else {
      console.log(`Inserting normal card at index ${i}`);
      cards.push(
        <div key={i} className={styles.DailyDeal}>
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
    <div className={styles.DailyDealsCreative}>
      <div className={styles.MainFrame}>
        <div className={styles.Header}>
          <div className={styles.InvoiceDiscountingDeals}>
            Invoice Discounting Deals
          </div>
          <div className={styles.June20}>{currentDate}</div>
        </div>
        <div
          className={`${styles.Body} ${
            selectedValue === "2" ? styles.BodyFor2Cards : ""
          }`}
        >
          <div className={styles.AllDeals}>
            <div
              className={`${styles.AllDealCards} ${
                selectedValue === "2" ? styles.AllDealCardsFor2Cards : ""
              }`}
            >
              {cards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
