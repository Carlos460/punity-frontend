import React, { useState } from 'react';
// Components
import DefaultTemplate from '../Layouts/DefaultTemplate';

import askImage from '../../assets/ask.png';

import {
  Container,
  QuestionContainer,
  QuestionTitle,
  QuestionInfo,
  AnswerContainer,
  AnswerDetailContainer,
  LeaveCommentContainer,
  InputContainer,
  ButtonCustom,
  FooterButtonsContainer,
  CheckboxContainer,
  CheckboxContent,
} from './styles';

export default function QuestionAsk() {
  const [integrateStackoverflow, setIntegrateStackoverflow] = useState(false);

  function changeStackoverflowIntegration(e) {
    setIntegrateStackoverflow(e.target.checked);
  }

  return (
    <DefaultTemplate>
      <div className="header">
        <Container>
          <QuestionContainer>
            <QuestionTitle>Ask a new Question to P'Unity</QuestionTitle>
            <QuestionInfo>...</QuestionInfo>
          </QuestionContainer>
        </Container>
      </div>
      <Container>
        <AnswerContainer>
          <AnswerDetailContainer>
            <h1>
              Ask a new Question to P'Unity <img src={askImage} />
            </h1>
            <CheckboxContainer>
              <CheckboxContent>
                <input
                  type="checkbox"
                  id="integrate-stackoverflow"
                  onChange={changeStackoverflowIntegration}
                />
                <label class="cbx" for="integrate-stackoverflow">
                  Integrate a StackOverflow Question
                </label>
              </CheckboxContent>
            </CheckboxContainer>
            <LeaveCommentContainer>
              {!integrateStackoverflow ? (
                <>
                  <InputContainer>
                    <h3>Title</h3>
                    <p>
                      Be specific in less words, imagine someone would ask you
                      that question.
                    </p>
                    <p>
                      <strong>Example: </strong> How can I prevent SQL Injection
                      in PHP?
                    </p>
                    <input />
                  </InputContainer>
                  <InputContainer>
                    <h3>Content</h3>
                    <p>Describe your Question more</p>
                    <textarea rows="4"></textarea>
                  </InputContainer>
                  <InputContainer>
                    <h3>Tags</h3>
                    <p>
                      Tag your Question seperated with a comma, for example:
                      jQuery, DNS
                    </p>
                    <input />
                  </InputContainer>
                  <InputContainer>
                    <h3>Communities (optional)</h3>
                    <p>
                      Ask your question within private communities. This
                      Question will not be public.
                    </p>
                  </InputContainer>
                </>
              ) : (
                <InputContainer>
                  <h3>Integrate a StackOverflow Question</h3>
                  <p>
                    Add a StackOverflow question link into the box below and we
                    will ask this Question to P'Unity.
                  </p>
                  <p>
                    <strong>Example:</strong>
                    <span>
                      {' '}
                      https://stackoverflow.com/questions/111111/question_title_01
                    </span>
                  </p>
                  <input />
                </InputContainer>
              )}
              <InputContainer>
                <ButtonCustom>Create a Community</ButtonCustom>
              </InputContainer>
              <FooterButtonsContainer>
                <ButtonCustom>Ask this Question</ButtonCustom>
                <ButtonCustom>Latest Questions</ButtonCustom>
                <ButtonCustom>Edit Notification Settings</ButtonCustom>
              </FooterButtonsContainer>
            </LeaveCommentContainer>
          </AnswerDetailContainer>
        </AnswerContainer>
      </Container>
      <style jsx>{`
        .header {
          background-color: #fab95b !important;
          height: 100vh;
          background-image: url(./background.webp);
          background-size: cover;
          transition: padding 0.2s;
        }
        .header-content {
          margin: 1rem;
          max-width: 34rem;
        }
        .header-button {
          color: white;
          font-size: 1rem;
          width: 8rem;
          background-color: var(--primary-color);
          border-radius: 2rem;
          padding: 0.6rem;
          margin: 0.2rem;
          border: none;
          outline: none;
          transition: background-color 0.2s ease;
        }
        .header-button:hover {
          background-color: black;
          cursor: pointer;
        }
        .pricing-plan__title {
          padding-top: 10rem;
          text-align: center;
        }
        .pricing-plan__container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 8em 5em;
        }
        @media (max-width: 460px) {
          .pricing-plan__container {
            padding: 5em 0em;
          }
        }
        @media (max-width: 800px) {
          .header {
            display: flex;
            justify-content: center;
            padding: 15rem 1rem;
          }
        }
        @media (min-width: 800px) {
          .header {
            padding: 15rem 10%;
          }
        }
        @media (min-width: 1200px) {
          .header {
            padding: 15rem 20%;
          }
        }
      `}</style>
    </DefaultTemplate>
  );
}
