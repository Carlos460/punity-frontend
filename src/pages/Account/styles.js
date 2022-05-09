import styled from 'styled-components'

// Account Profile Header Components

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem 0rem;
`

export const Title = styled.h1`
  color: white;
`
export const SubTitle = styled.h3`
  color: white;
`

export const AccountContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`

export const AccountSideBar = styled.div`
  width: 25%;
  background-color: #F1F1F1;
  @media (max-width: 1000px){
    width: 100%;
  }
`
export const SideBarLink = styled.div`
  height: 5rem;
  font-size: 1.2rem;
  & > a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    color: black;
  }
  & > a:hover {
    background-color: #DDDDDD;
  }
`

export const AccountBody = styled.div`
  padding: 1rem;
  padding-bottom: 10rem;
`

// Subpage Components
export const SubpageButtonContainer = styled.div`
  display: flex;
`

export const SubpageButton = styled.button`
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: max-content;
  border: 2px solid #fab85b;
  margin: 1rem;
  margin-left: 0rem;
  color: #000;
  background: #fff;
  transition: all 0.2s;

  &:hover {
      color: #fab85b;
  }
`

export const SubpageInput =  styled.input`
  max-width: 100%;
  width: 20rem !important;
  padding: 10px;
  color: #000;
  margin: 2rem 0rem;
  width: 85%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #f4f4f4;
  @media(max-width: 592px) {
      width: 100% !important;
  }
`
export const SubpageTextArea = styled.textarea`
  max-width: 100%;
  width: 30rem !important;
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
  background: #f4f4f4;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 10rem;
  resize: vertical;
  white-space: nowrap;
` 
