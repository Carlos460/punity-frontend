import styled from 'styled-components'

export const Container = styled.div`
    max-width: 800px;
    padding: 10px;
    margin: 100px auto;
    display: flex;
    align-items: center;

    @media(max-width: 992px) {
        width: 100%;
        justify-content: center;
    }
`

export const TextHeader = styled.div`
    display: flex;
    flex-direction: column;

    & > h3 {
        margin-bottom: 60px;
        font-size: 28px;
    }

    & > p {
        font-size: 16px;
        font-weight: bold;
        color: green;
    }

    & > button {
        max-width: max-content;
        padding: 0 15px;
        height: 55px;

        border: 2px solid orange;
    }

    & > span {
        margin-top: 20px;
        color: #f89911;
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