import styled from 'styled-components'

export const Container = styled.div`
    max-width: 800px;
    padding: 10px;
    margin: 100px auto;
    display: flex;
    align-items: center;
`

export const TextHeader = styled.div`
    display: flex;
    flex-direction: column;

    & > h3 {
        margin-bottom: 23px;
        font-size: 28px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    & > p {
        font-size: 20px;

        & > strong {
            color: orange;
        }
    }

    & > button {
        max-width: max-content;
        padding: 0 15px;
        height: 55px;

        border: 2px solid orange;
        color: red;
    }
`

export const Input = styled.input`
    max-width: 100%;
    width: ${props => props.width ? props.width : '100%'} !important;
    padding: 10px;
    color: #000;
    margin-bottom: 20px;
    width: 85%;
    border: 2px solid #ccc;
    border-radius: 4px;
    background: #f4f4f4;

    @media(max-width: 592px) {
        width: 100% !important;
    }
`