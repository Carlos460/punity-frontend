import React from 'react';
//Components
import DefaultTemplate from '../Layouts/default';
import LatestQuestions from '../Components/latestquestions';

function Questions() {
  return (
    <DefaultTemplate>
      <div className="questions-header">
        <div className="question-header-content">
          <h1>Latest Questions on P'Unity</h1>
          <p>date • Posted by Prodigy</p>
        </div>
      </div>
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 blog-content">
              <h1>Latest Questions in P'Unity</h1>
              <h3>Total Questions: 188</h3>
              <a
                className="button button3 latest-question-button-text"
                href="/"
              >
                Ask a new Question
              </a>
              <a
                className="button button3 latest-question-button-text"
                href="/"
              >
                Report a Question | User
              </a>
            </div>
          </div>
        </div>
      </section>
      <LatestQuestions></LatestQuestions>
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 blog-content">
              <h1>Other Informations...</h1>
              <h5>
                <a className="ask-question-here-text" href="/">
                  Ask A Question here
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .ask-question-here-text {
          color: #fab95b;
          font-size: 1.4rem;
        }
        .ask-question-here-text:hover {
          color: #ffa82b;
        }
        .latest-question-button-text:hover {
          color: #ffa82b;
        }

        .questions-header {
          display: flex;
          background-color: var(--primary-color);
          width: 100%;
          height: 100vh;
        }
        .question-header-content {
          height: 15rem;
          width: 40rem;
          margin: auto;
          text-align: center;
        }
        .question-header-content > p {
          font-size: 1.5rem;
          color: white;
        }
      `}</style>
    </DefaultTemplate>
  );
}

export default Questions;
