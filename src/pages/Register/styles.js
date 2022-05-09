import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    max-width: 800px;
    padding: 10px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextHeader = styled.div`
    display: flex;
    flex-direction: column;

    & > h3 {
        margin-bottom: 25px !important;
        font-size: 28px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

`

export const FooterButtonsContainer = styled.div`
    margin-top: 40px;
    display: flex;

    @media(max-width: 767px) {
        flex-direction: column;
    }

`

export const DefaultButton = styled.button`
    margin-top: 20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: max-content;
    border: 2px solid #fab85b;

    color: #000;
    background: #fff;
    transition: all 0.2s;

    &:hover {
        color: #fab85b;
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

export const ButtonLink = styled(Link)`
    color: #fab85b;
    transition: all 0.2s;

    &:hover {
        color: #e78705;
    }
`