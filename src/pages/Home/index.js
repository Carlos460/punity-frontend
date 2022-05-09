import React from 'react';
// Components
import DefaultTemplate from '../Layouts/DefaultTemplate';
import Features from '../Components/Features';
import LatestQuestions from '../Components/LatestQuestion';
import PricingCard from '../Components/PricingCard';
import Header from '../Components/Header';

function Home() {
  return (
    <DefaultTemplate>
      <Header
        backgroundColor={`teal`}
        backgroundImage={`url(./background.webp)`}
      >
        <div className="header-content">
          <h1 style={{ fontSize: '3rem', color: 'white' }}>
            P'Unity. Real. Time.
          </h1>
          <h2
            style={{
              fontSize: '1.4rem',
              color: 'rgb(255, 236, 94)',
              wordSpacing: '0.4rem',
            }}
          >
            Lightweight | Fast | Unique
          </h2>
          <p style={{ color: 'white', fontSize: '1.3rem' }}>
            An unique new type of a Online Community around Computer Science.
            Developed specially for performance, live comments, an intelligent
            code engine and more.
          </p>
          <button className="header-button">Read More Here</button>
        </div>
      </Header>
      <Features></Features>
      <LatestQuestions></LatestQuestions>
      <section className="pricing-plan">
        <div className="pricing-plan__title">
          <h1>Checkout Our Pricing Plans</h1>
        </div>
        <div className="pricing-plan__container" id="pricing">
          <PricingCard
            title={<h2>Free</h2>}
            price={<h4>€ 0.00</h4>}
            benifitList={
              <ul>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
              </ul>
            }
          />
          <PricingCard
            isMostPopular={true}
            isLarge={true}
            title={<h2>Pro</h2>}
            price={<h4 style={{ color: 'var(--primary-color)' }}>€ 6.99</h4>}
            billingPlan={<h6>billed annually</h6>}
            benifitList={
              <ul>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
              </ul>
            }
          />
          <PricingCard
            title={<h2>Business</h2>}
            price={<h4>Not Public Yet</h4>}
            benifitList={
              <ul>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
                <li>List of Benefit</li>
              </ul>
            }
          />
        </div>
      </section>

      <style jsx>{`
        .header-content {
          margin: 1rem;
          max-width: 34rem;
        }
        .header-button {
          color: white;
          font-size: 1rem;
          width: 150px;
          background-color: var(--primary-color);
          border-radius: 2rem;
          padding: 0.6rem;
          margin: 0.2rem;
          border: none;
          outline: none;
          transition: background-color 0.3s ease;
        }
        .header-button:hover {
          background-color: black;
          cursor: pointer;
          outline: none;
          border: none;
        }
        .header-button:focus {
          outline: none;
          border: none;
        }
        .header-button:active {
          color: white;
          background-color: var(--primary-color);
        }
        .pricing-plan__title {
          padding-top: 8rem;
          text-align: center;
        }
        .pricing-plan__container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 8em 0em;
        }
      `}</style>
    </DefaultTemplate>
  );
}

export default Home;
