import React, { useEffect, useState } from "react";

function PricingCard(props) {
  const [isMostPopular, setIsMostPopular] = useState("");
  const [isLarge, setIsLarge] = useState("");

  useEffect(() => {
    props.isMostPopular === true ? setIsMostPopular("pricing-card--blue-border") : setIsMostPopular("");
    props.isLarge === true ? setIsLarge("pricing-card--large") : setIsLarge("");
  }, []);

  return (
    <section className={`pricing-card shadow ${isMostPopular} ${isLarge}`}>
      {props.isMostPopular === true &&
        <div className="pricing-card__banner">Most Popular</div>
      }
      <div className="pricing-card__title">
        {props.title}
      </div>
      <hr />
      <div className="pricing-card__price">
        {props.price}
        {props.billingPlan}
      </div>
      <hr />
      <div className="pricing-card__benifit-list">
        {props.benifitList}
      </div>
      <div className="pricing-card__button-container">
        <button className="btn btn-primary pricing-card__button--large">Learn More</button>
      </div>
      <style jsx>{`
        .pricing-card {
          position: relative;
          margin: 3em;
          padding: 2em 3em;
          height: 30em;
          width: 18em;
        }
        .pricing-card--blue-border{
          border: 0.2em solid #0075FF;
        }
        .pricing-card--large{
          transform: scale(1.1);
        }
        .pricing-card__banner {
          position: absolute;
          padding: 0.1em;
          margin: 0em auto;
          top: -2em;
          left: 0;
          right: 0;
          text-align: center;
          width: 10em;
          height: 2em;
          background-color: #0075FF;
          color: white;
          font-size: 1.5em;
          text-align: center;
        }
        .pricing-card__title {
          text-align: center;
        }
        .pricing-card__price {
          text-align: center;
        }
        .pricing-card__benifit-list > ul > li {
          margin: 0.5em 0em;
        }
        .pricing-card__button-container {
          position: absolute;
          bottom: 1em;
          left: 0em;
          display: flex;
          justify-content: center;
          width: 100%
        }
        .pricing-card__button--large {
          width: 10em;
          height:2.5rem;
          padding:0.1em;
        }
        @media (max-width: 1170px){
          .pricing-card {
            transform: scale(1);
            margin: 3em 1em;
          }
        }
        `}</style>
    </section>
  );
}

export default PricingCard;