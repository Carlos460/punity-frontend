import React, { useState } from 'react';

import Footer from '../Components/Footer';

import {
  Container,
  TextHeader,
  CheckboxContainer,
  CheckboxContent,
  Input,
  FooterButtonsContainer,
  DefaultButton,
  ButtonLink,
} from './styles';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputPasswordType, setInputPasswordType] = useState('password');

  function changePasswordView() {
    setShowPassword(!showPassword);
    if (!showPassword) {
      setInputPasswordType('text');
    } else {
      setInputPasswordType('password');
    }
  }

  return (
    <>
      <Container>
        <TextHeader>
          <h3>Create your account in miliseconds and become a P'Uniter</h3>
          <Input placeholder="username" width="450px" type="text" />
          <Input placeholder="email" width="450px" type="text" />
          <Input
            placeholder="password"
            width="450px"
            type={inputPasswordType}
          />
          <CheckboxContainer>
            <CheckboxContent>
              <input
                type="checkbox"
                id="integrate-stackoverflow"
                checked={showPassword}
                onChange={changePasswordView}
              />
              <label class="cbx" for="integrate-stackoverflow">
                Show Password
              </label>
            </CheckboxContent>
          </CheckboxContainer>
          <DefaultButton>Create your account now</DefaultButton>
        </TextHeader>
        <FooterButtonsContainer>
          <ButtonLink to="/">Go back to homepage</ButtonLink>
        </FooterButtonsContainer>
      </Container>
      <Footer />
    </>
  );
}
