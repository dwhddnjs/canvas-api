import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInTitle>Login</SignInTitle>
      <InputWrapper>
        <SignInInput placeholder="Email" />
        <SignInInput placeholder="Password" />
        <ButtonWrapper>
          <SignInButton>로그인</SignInButton>
          <SignInButton>회원가입</SignInButton>
        </ButtonWrapper>
      </InputWrapper>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  width: 500px;
  background-color: #ffffff;
  height: 600px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignInInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #333333;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
`;

const SignInTitle = styled.span`
  color: #333333;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const SignInButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px;
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  color: #333333;
  font-weight: 800;
`;
