import React, { useEffect, useState } from 'react';
// Components
import DefaultTemplate from '../Layouts/default';

import {
  Container,
  QuestionContainer,
  QuestionTitle,
  QuestionInfo,
  AnswerContainer,
  AnswerDetailContainer,
  AnswerInfoContainer,
  SideTopic,
  CategoriesList,
  CategoryItem,
  FindKeyInput,
  CommentsContainer,
  Comment,
  ImageContainer,
  CommentInfo,
  CommentCreatorName,
  CommentDateCreation,
  CommentText,
  QuestionDescriptionContainer,
  QuestionDescription,
  QuestionTags,
  QuestionFooter,
  LeaveCommentContainer,
  TextAreaContainer,
} from './styles';

export default function QuestionDetail() {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    async function loadComments() {
      setTimeout(() => {
        let response = [
          {
            name: 'prodigy',
            date: '2020-07-29 11:58:42',
            comment:
              'I found the problem: there is no ...you know. Lorem limpsum at somem canus in at somes sanactus.',
          },
          {
            name: 'rhadamez',
            date: '2020-07-29 11:58:42',
            comment:
              'Dont know what is going on now with my code. Lorem limpsum at somem canus in at somes sanactus.',
          },
          {
            name: 'carlos',
            date: '2020-07-29 11:58:42',
            comment:
              'Lorem limpsum at somem canus in at somes sanactus. Lorem limpsum at somem canus in at somes sanactus.',
          },
          {
            name: 'venom',
            date: '2020-07-29 11:58:42',
            comment:
              'I found the problem: there is no ...you know. Lorem limpsum at somem canus in at somes sanactus.',
          },
        ];
        setComments(response);
        setLoadingComments(false);
      }, 2000);
    }
    loadComments();
  }, []);

  return (
    <DefaultTemplate>
      <div className="header">
        <Container>
          <QuestionContainer>
            <QuestionTitle>Test question</QuestionTitle>
            <QuestionInfo>Wed Jun 17 2020 15:05:04</QuestionInfo>
            <QuestionInfo>
              Posted by <strong>hello_world</strong>
            </QuestionInfo>
            <a className="button button3 latest-question-button-text" href="/">
              Ask a new Question
            </a>
          </QuestionContainer>
        </Container>
      </div>
      <Container>
        <AnswerContainer>
          <AnswerDetailContainer>
            <QuestionDescriptionContainer>
              <QuestionDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur egestas, magna vitae sollicitudin ornare, mauris diam
                venenatis massa, a maximus est dolor non lorem. Sed urna ex,
                rutrum et facilisis a, scelerisque sed neque. egestas quam.
                Suspendisse elementum, mi in pellentesque imperdiet, metus sem
                pharetra ligula, ac imperdiet elit erat dictum massa.
              </QuestionDescription>
              <QuestionTags>Tags: #nodejs, #async, #awayt</QuestionTags>
              <QuestionFooter>
                You have a solution? <strong>Here</strong> you can answer.
              </QuestionFooter>
            </QuestionDescriptionContainer>
            <CommentsContainer>
              <h2>{comments.length || '0'} Comments</h2>
              {comments.length > 0 &&
                comments.map((comment) => (
                  <Comment>
                    <ImageContainer
                      src={`https://ui-avatars.com/api/?font-size=0.7&background=fff&color=fab85b&border=red&name=prodigy}`}
                      alt="user-name-here"
                    ></ImageContainer>
                    <CommentInfo>
                      <CommentCreatorName>{comment.name}</CommentCreatorName>
                      <CommentDateCreation>{comment.date}</CommentDateCreation>
                      <CommentText>{comment.comment}</CommentText>
                      <button>Login to reply</button>
                    </CommentInfo>
                  </Comment>
                ))}
              {!loadingComments &&
                comments.length === 0 &&
                'There are no comments :/'}
              {loadingComments ? 'Loading comments...' : ''}
            </CommentsContainer>
            <LeaveCommentContainer>
              <h3>Leave a comment</h3>
              <TextAreaContainer>
                <label for="leave-comment">Comment:</label>
                <textarea rows="9" id="leave-comment"></textarea>
                <button>Log In or Register to comment</button>
              </TextAreaContainer>
            </LeaveCommentContainer>
          </AnswerDetailContainer>
          <AnswerInfoContainer>
            <SideTopic>
              <h3>Find for key</h3>
              <FindKeyInput placeholder="#java #node" />
            </SideTopic>

            <SideTopic>
              <h3>Categories</h3>
              <CategoriesList>
                <CategoryItem>
                  Dog <span>(12)</span>
                </CategoryItem>
                <CategoryItem>
                  Dog Food<span>(22)</span>
                </CategoryItem>
                <CategoryItem>
                  Vetenirarian<span>(37)</span>
                </CategoryItem>
                <CategoryItem>
                  Events<span>(42)</span>
                </CategoryItem>
              </CategoriesList>
            </SideTopic>
            <SideTopic>
              <h3>About the Author</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
              <button>Read More</button>
            </SideTopic>
            <SideTopic>
              <h3>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </SideTopic>
          </AnswerInfoContainer>
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
