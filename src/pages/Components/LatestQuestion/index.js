import React from 'react';
// Component Imports
import QuestionCard from '../QuestionCard';

function LatestQuestions() {
  return (
    <div>
      <section className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">
                Latest Public Qestions
              </h2>
            </div>
          </div>
          <div className="question-container">
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
          </div>
        </div>
      </section>
      <style jsx>{`
        .question-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
}

export default LatestQuestions;
