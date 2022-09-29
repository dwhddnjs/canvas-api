import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleOnSubmit = async () => {
    try {
      const res = await Axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'http://localhost:4000/api/user/login',
        data: inputForm,
      });
      if (res.data) {
        sessionStorage.setItem('auth', res.data);
        navigate('/mypage');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>Login</SignInTitle>
      <InputWrapper>
        <SignInInput
          placeholder="Email"
          name="email"
          value={inputForm.email}
          onChange={handleOnChange}
        />
        <SignInInput
          placeholder="Password"
          name="password"
          value={inputForm.password}
          onChange={handleOnChange}
        />
        <ButtonWrapper>
          <SignInButton onClick={handleOnSubmit}>로그인</SignInButton>
          <SignInButton>
            <Link to="/register">회원가입</Link>
          </SignInButton>
        </ButtonWrapper>
      </InputWrapper>
    </SignInContainer>
  );
};

export default Login;

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
