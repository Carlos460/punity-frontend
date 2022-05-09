import React from 'react';

import Footer from '../Components/Footer';

import { Container, TextHeader } from './styles';

export default function ForgetPassword() {
  return (
    <>
      <Container>
        <TextHeader>
          <h3>You've forgot your password!</h3>
          <p>The link has been sent to punity@punity.de</p>
          <button>Send reset email</button>
          <span>Go back to homepage</span>
        </TextHeader>
      </Container>
      <Footer />
    </>
  );
}
