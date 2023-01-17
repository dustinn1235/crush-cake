import Title from "../components/Title";
import "../css/Events.css";
import { BsMusicNoteBeamed } from "react-icons/bs";

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
          <div>15%</div>
          <p>OFFER FOR NEW CUSTOMER'S FIRST ORDER</p>
        </div>
        <div className="long-banner"></div>
      </div>
    </div>
  );
};

export default Events;
