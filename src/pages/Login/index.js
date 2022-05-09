import React, { useState } from 'react';

import Footer from '../Components/footer';

import {
  Container,
  TextHeader,
  CheckboxContainer,
  CheckboxContent,
  Input,
  FooterButtonsContainer,
  LoginButton,
  DefaultButton,
} from './styles';

export default function Login() {
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
          <h3>Log in to your Account - Fast, Secure and Easy</h3>
          <Input placeholder="username" width="350px" type="text" />
          <Input
            placeholder="password"
            width="350px"
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
          <LoginButton>Log in to your Account</LoginButton>
        </TextHeader>
        <FooterButtonsContainer>
          <DefaultButton>Forgot your Password?</DefaultButton>
          <DefaultButton>Register your Account for free</DefaultButton>
        </FooterButtonsContainer>
      </Container>
      <Footer />
    </>
  );
}
