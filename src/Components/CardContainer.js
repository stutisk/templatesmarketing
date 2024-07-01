import React from "react";
import styles from "./CardContainer.module.css";
import { MultiCard } from "./MultiCard";

export const CardContainer = ({ selectedValue, minimumInvestments }) => {
  console.log(selectedValue);
  return (
    <div className={styles.DailyDealsCreative}>
      <div className={styles.MainFrame}>
        <div className={styles.Header}>
          <div className={styles.InvoiceDiscountingDeals}>
            Invoice Discounting Deals
          </div>
          <div className={styles.June20}>June 20</div>
        </div>
        {/* AllDealCardsFor2Cards */}
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
                 <MultiCard/>
              {Array.from({ length: parseInt(selectedValue) }, (_, index) => (
                <div key={index} className={styles.DailyDeal}>
                  <div
                    className={`${styles.Frame1171276195} ${
                      selectedValue === "2"
                        ? styles.Frame1171276195For2Cards
                        : ""
                    }`}
                  >
                    <img
                      className={styles.Image48499}
                      src="https://via.placeholder.com/147x34"
                      alt="Placeholder"
                    />
                  </div>
                  <div className={styles.Frame1171276264}>
                    <div className={styles.Frame1171276253}>
                      <div className={styles.Frame1116603263}>
                        <div className={styles.Xirr}>xirr</div>
                      </div>
                      <div className={styles.XirrValue}>14.00%</div>
                    </div>
                    <div className={styles.Frame1171276186}>
                      <div className={styles.Frame1171276254}>
                        <div className={styles.Frame1171276266}>
                          <div className={styles.Days}>62 Days</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.Frame1171276252}>
                      <div className={styles.Frame1116603263}>
                        <div className={styles.MinInvestment}>
                          MIN INVESTMENT
                        </div>
                      </div>
                      <div className={styles.MinInvestmentNumber}>
                      {minimumInvestments[index]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
