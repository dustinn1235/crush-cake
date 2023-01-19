import Title from "../components/Title";
import "../css/Events.css";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { TiStarFullOutline } from "react-icons/ti";

const Events = () => {
  return (
    <div className="events-page-wrapper">
      <Title title={"Promotions"}></Title>
      <div className="promotion-heading">
        <div className="img"></div>
        <div id="july-wrapper">
          <div>
            <BsMusicNoteBeamed
              style={{
                marginTop: "-10%",
                marginRight: "-10%",
                color: "#e9666b",
              }}
            />
          </div>
          <h1>HELLO JULY</h1>
          <p style={{ marginTop: "auto", color: "white", fontSize: "1.5rem" }}>
            Great deals for all customers with brithday in July
          </p>
          <p>
            Applicable for orders over $50 with any products and delivery
            methods
          </p>
        </div>
      </div>
      <div className="long-wrapper">
        <div className="long-banner">
          <div id="banner-title1">
            <h1>15</h1>
            <p>%</p>
          </div>
          <p>OFFER FOR NEW CUSTOMER'S FIRST ORDER</p>
        </div>
        <div className="long-banner">
          <div id="banner-title2">
            <div id="buy1get1">
              <p>
                BUY
                <br />
                GET
              </p>
              <h1>1</h1>
            </div>
            <p id="free">FREE</p>
          </div>
          <p>OFFER WHEN BUYING FROM THIRD PRODUCTS</p>
        </div>
      </div>
      <div className="offer-wrapper">
        <h1 style={{ color: "white" }}>OTHER OFFER</h1>
        <div className="offer-container">
          <div>
            <h1>GET NOW!</h1>
            <p>
              CRUSH23
              <br />
              CRUSH99HSU
              <br />
              BLACKFRIDAY25
            </p>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--darkPrimary)",
              position: "relative",
            }}
          >
            <h1 id="specialTitle">25.11</h1>
            <div
              style={{
                width: "100%",
                fontSize: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                textAlign: "center",
              }}
            >
              <span>S</span>
              <span>A</span>
              <span>L</span>
              <span>E</span>
            </div>
            <div className="circle" style={{ left: "7%", top: "40%" }}></div>
            <div
              className="circle"
              style={{ left: "50%", bottom: "10%", width: "1.3rem" }}
            ></div>
            <div
              className="circle"
              style={{
                right: "15%",
                top: "12%",
                width: "1.5rem",
                backgroundColor: "#e9666b",
              }}
            ></div>
          </div>
          <div style={{ backgroundColor: "#b8e2f4", position: "relative" }}>
            <TiStarFullOutline id="star" />
            <h1>FREE SHIP</h1>
            <p
              style={{
                fontWeight: "800",
                fontSize: "2rem",
                fontStyle: "italic",
                color: "white",
              }}
            >
              HAPPY MONDAY!
            </p>
          </div>
          <div style={{ backgroundColor: "#6175a7", position: "relative" }}>
            <h1 style={{ fontSize: "3rem", color: "#b8e2f4" }}>BIG OFFERS</h1>
            <p
              style={{
                fontWeight: "800",
                fontSize: "2rem",
                fontStyle: "italic",
                color: "white",
              }}
            >
              Year-End
              <br />
              Clearance!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
