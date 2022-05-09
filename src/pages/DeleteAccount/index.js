import React from 'react';

import Footer from '../Components/footer';

import { Container, TextHeader, Input } from './styles';

export default function DeleteAccount() {
  return (
    <>
      <Container>
        <TextHeader>
          <h3>Delete your Account</h3>
          <h3>
            We will immediately delete all what you have done with your user
            account
          </h3>
          <p>Expect your questions, these will become the username "puniter"</p>
          <Input width="400px" type="password" />
          <p>
            Please write <strong>delete my account now</strong> in the text
          </p>
          <Input width="350px" type="text" />
          <button>Yes, delete my account now</button>
        </TextHeader>
      </Container>
      <Footer />
    </>
  );
}
