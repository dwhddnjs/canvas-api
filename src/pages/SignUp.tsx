import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpTitle>회원가입</SignUpTitle>
      <InputWrapper>
        <SignUpInput placeholder="name" />
        <SignUpInput placeholder="Email" />
        <SignUpInput placeholder="Password1" />
        <SignUpInput placeholder="Password2" />
        <ButtonWrapper>
          <SignUpButton>회원가입</SignUpButton>
        </ButtonWrapper>
      </InputWrapper>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
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

const SignUpInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #333333;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
`;

const SignUpTitle = styled.span`
  color: #333333;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const SignUpButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px;
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  color: #333333;
  font-weight: 800;
`;
