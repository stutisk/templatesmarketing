
import  "./CardContainer.module.css";
export const MultiCard = () => {
  return (
    <div
      className="DailyDealMulti"
      style={{
        flex: "1 1 0",
        alignSelf: "stretch",
        borderRadius: "20.53px",
        overflow: "hidden",
        border: "31px rgba(177.76, 214.11, 191.16, 0.12) solid",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <div
        className="Frame1171276190"
        style={{
          alignSelf: "stretch",
          height: "204px",
          paddingTop: "36.51px",
          paddingBottom: "68.45px",
          paddingLeft: "68.45px",
          paddingRight: "68.45px",
          background: "#14532D",
          borderRadius: "20.53px",
          justifyContent: "center",
          alignItems: "center",
          gap: "22.82px",
          display: "inline-flex",
        }}
      >
        <div
          className="Frame1171276267"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            display: "inline-flex",
          }}
        >
          <img
            className="Image48501"
            style={{ width: "181.78px", height: "79.94px" }}
            // src={imageUrl}
            alt="Placeholder"
          />
          <div
            className="MultiInvoiceDiscounting"
            style={{
              width: "410px",
              textAlign: "center",
              color: "#F8FAFC",
              fontSize: "34px",
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: "44.20px",
              wordWrap: "break-word",
            }}
          >
            Multi Invoice Discounting
          </div>
        </div>
      </div>
      <div
        className="Frame1171276189"
        style={{
          alignSelf: "stretch",
          flex: "1 1 0",
          background: "white",
          boxShadow:
            "0px 10.267449378967285px 22.81655502319336px rgba(0, 0, 0, 0.09)",
          borderRadius: "20.53px",
          overflow: "hidden",
          border: "1.14px rgba(0, 0, 0, 0.08) solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          className="Frame1171276253"
          style={{
            alignSelf: "stretch",
            height: "170.53px",
            paddingLeft: "15.64px",
            paddingRight: "15.64px",
            paddingTop: "32px",
            paddingBottom: "32px",
            borderBottom: "1px rgba(0, 0, 0, 0.16) solid",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15.64px",
            display: "flex",
          }}
        >
          <div
            className="Frame1116603263"
            style={{
              alignSelf: "stretch",
              height: "42px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="Xirr"
              style={{
                color: "#A8A29E",
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: "600",
                textTransform: "uppercase",
                lineHeight: "42px",
                letterSpacing: "1.40px",
                wordWrap: "break-word",
              }}
            >
              XIRR
            </div>
          </div>
          <div
            className="XirrValue"
            style={{
              alignSelf: "stretch",
              height: "48.88px",
              textAlign: "center",
              color: "#15803D",
              fontSize: "60px",
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: "90px",
              wordWrap: "break-word",
            }}
          >
         41%
          </div>
        </div>
        <div
          className="Frame1171276254"
          style={{
            alignSelf: "stretch",
            height: "105.54px",
            paddingLeft: "19.67px",
            paddingRight: "19.67px",
            paddingTop: "24px",
            paddingBottom: "24px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "19.67px",
            display: "flex",
          }}
        >
          <div
            className="Frame1171276266"
            style={{
              width: "201.38px",
              height: "57.54px",
              paddingLeft: "17.70px",
              paddingRight: "17.70px",
              paddingTop: "11.80px",
              paddingBottom: "11.80px",
              background: "#15803D",
              borderRadius: "20.65px",
              justifyContent: "center",
              alignItems: "center",
              gap: "7.38px",
              display: "inline-flex",
            }}
          >
            <div
              className="Days"
              style={{
                color: "white",
                fontSize: "30.35px",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "45.52px",
                wordWrap: "break-word",
              }}
            >
             6 days
            </div>
          </div>
        </div>
        <div
          className="Frame1171276252"
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            paddingLeft: "19.67px",
            paddingRight: "19.67px",
            paddingTop: "9.84px",
            paddingBottom: "9.84px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "19.67px",
            display: "flex",
          }}
        >
          <div
            className="Frame1116603263"
            style={{
              alignSelf: "stretch",
              height: "42px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="MinInvestment"
              style={{
                color: "#A8A29E",
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: "600",
                textTransform: "uppercase",
                lineHeight: "42px",
                letterSpacing: "1.40px",
                wordWrap: "break-word",
              }}
            >
              MIN INVESTMENT
            </div>
          </div>
          <div
            className="MinInvestmentValue"
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              color: "#44403C",
              fontSize: "41.14px",
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: "61.71px",
              wordWrap: "break-word",
            }}
          >
            500000
          </div>
        </div>
      </div>
    </div>
  );
};
