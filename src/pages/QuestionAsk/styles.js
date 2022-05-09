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

export const LeaveCommentContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;

    & > h3 {
        font-size: 25px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

    & > h3 {
        font-weight: bold;
        font-size: 20px;
    }

    & > p {
        color: #000;
        margin-bottom: 0;

        & > span {
            font-style: italic;
        }
    }

    & > input, textarea {
        padding: 10px;
        color: #000;
        margin-bottom: 20px;
        width: 85%;
        border: 2px solid #ccc;
        border-radius: 4px;
        background: #f4f4f4;

        @media(max-width: 767px) {
            width: 100%;
        }
    }

`

export const FooterButtonsContainer = styled.div`
    margin-top: 60px;

    & > button {
        margin-right: 5px;
    }
`

export const ButtonCustom = styled.button`
    max-width: max-content;
`

export const CheckboxContainer = styled.div`
`

export const CheckboxContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > label {
        margin: 0 0 0 10px;
    }
`