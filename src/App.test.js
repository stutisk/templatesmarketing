import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// import React from "react";
// import styles from "./CardContainer.module.css";

// export const CardContainer = ({
//   selectedValue,
//   minimumInvestments,
//   xirr,
//   logoImageUrl,
//   showMulti,
//   multiCardPosition,
//   multiCardInvestment,
// }) => {
//   const cards = [];

//   for (let i = 0; i < parseInt(selectedValue); i++) {
//     if (showMulti && i === parseInt(multiCardPosition) - 1) {
//       cards.push(
//         <div key={i} className={styles.MultiCard}>
//           <div className={styles.Content}>
//             <div className={styles.Header}>Multi Card</div>
//             <div className={styles.Body}>
//               <div className={styles.MinInvestment}>MIN INVESTMENT</div>
//               <div className={styles.MinInvestmentNumber}>
//                 {multiCardInvestment}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       cards.push(
//         <div key={i} className={styles.Card}>
//           <div className={styles.Content}>
//             <div className={styles.Header}>
//               {logoImageUrl[i] ? (
//                 <img
//                   src={logoImageUrl[i]}
//                   alt={`Logo ${i + 1}`}
//                   className={styles.LogoImage}
//                 />
//               ) : (
//                 `Card ${i + 1}`
//               )}
//             </div>
//             <div className={styles.Body}>
//               <div className={styles.MinInvestment}>MIN INVESTMENT</div>
//               <div className={styles.MinInvestmentNumber}>
//                 {minimumInvestments[i]}
//               </div>
//               <div className={styles.XIRR}>XIRR</div>
//               <div className={styles.XIRRNumber}>{xirr[i]}</div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   return (
//     <div className={styles.DailyDealsCreative}>
//       <div className={styles.MainFrame}>
//         <div className={styles.Header}>
//           <div className={styles.InvoiceDiscountingDeals}>
//             Invoice Discounting Deals
//           </div>
//           <div className={styles.June20}>June 20</div>
//         </div>
//         <div
//           className={`${styles.Body} ${
//             selectedValue === "2" ? styles.BodyFor2Cards : ""
//           }`}
//         >
//           <div className={styles.AllDeals}>
//             <div
//               className={`${styles.AllDealCards} ${
//                 selectedValue === "2" ? styles.AllDealCardsFor2Cards : ""
//               }`}
//             >
//               {cards}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
