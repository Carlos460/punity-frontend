import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
`

export const QuestionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const QuestionTitle = styled.h1`
    font-size: 49px;
`

export const QuestionInfo = styled.span`
    margin-bottom: 10px;

    color: #fff;
    font-size: 21px;

    & > strong {
        color: #0036b4;
    }
`

export const AnswerContainer = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 100px auto;

    color: #000;

    @media(max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`

export const AnswerDetailContainer = styled.div`
    margin: 0 30px;
    width: 70%;
    display: flex;
    flex-direction: column;

    @media(max-width: 767px) {
        width: 90%;
    }
`

export const AnswerInfoContainer = styled.div`
    margin-right: 15px;
    width: 30%;
    display: flex;
    flex-direction: column;

    @media(max-width: 767px) {
        width: 90%;
    }
`

export const SideTopic = styled.div`
    width: 100%;
    margin-bottom: 60px;

    & > h3 {
        font-size: 18px;
    }

    & > p {
        font-size: 15px;
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: 140px;
        border-radius: 30px;
        border: none;

        color: #fff;
        background: #fab85b;
    }
`

export const FindKeyInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    text-overflow: ellipsis;

    border: none;
    background: #fab85b;
`

export const CategoriesList = styled.div`
    list-style: none;
`

export const CategoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;

    color: #f89911;

    & + div {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    & > span {
        color: #ccc;
    }
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Comment = styled.div`
    margin: 40px 15px 0 0;
    display: flex;
`

export const ImageContainer = styled.img`
    display: block;
    object-fit: cover;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    
    border: 3px solid #fab85b;
    border-radius: 50%;
    transition: all 0.2s;
`

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const CommentCreatorName = styled.div`
    font-size: 20px;
`

export const CommentDateCreation = styled.div`
    font-size: 13px;
    letter-spacing: 1px;
    color: #ccc;
`

export const CommentText = styled.div`
`

export const QuestionDescriptionContainer = styled.div`
    margin: 10px 0 60px 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
`

export const QuestionDescription = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
`

export const QuestionTags = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
`

export const QuestionFooter = styled.span`
    margin-bottom: 50px;

    font-size: 25px;
    color: #000;
    & > strong {
        color: #fab85b;
    }
`

export const LeaveCommentContainer = styled.div`
    margin: 50px 0;

    & > h3 {
        font-size: 25px;
    }
`

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > label {
        color: #8c8c8c;
    }

    & > textarea {
        padding: 10px;
        color: #000;
        margin-bottom: 20px;
        width: 85%;
        border: 2px solid #ccc;
        background: #ebebeb;

        @media(max-width: 767px) {
            width: 100%;
        }
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: max-content;
        border-radius: 30px;
        border: none;

        color: #fff;
        background: #fab85b;
    }
`