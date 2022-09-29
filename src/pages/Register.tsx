import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [inputForm, setInputForm] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
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
        data: {
          name: inputForm.name,
          email: inputForm.email,
          password: inputForm.password,
        },
        url: 'http://localhost:4000/api/user/register',
      });
      navigate('/');
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpTitle>회원가입</SignUpTitle>
      <InputWrapper>
        <SignUpInput
          placeholder="name"
          value={inputForm.name}
          name="name"
          onChange={onChange}
        />
        <SignUpInput
          placeholder="Email"
          value={inputForm.email}
          name="email"
          onChange={onChange}
        />
        <SignUpInput
          placeholder="Password1"
          value={inputForm.password}
          name="password"
          onChange={onChange}
        />
        <SignUpInput
          placeholder="Password2"
          value={inputForm.repassword}
          name="repassword"
          onChange={onChange}
        />
        <ButtonWrapper>
          <SignUpButton onClick={handleOnSubmit}>회원가입</SignUpButton>
        </ButtonWrapper>
      </InputWrapper>
    </SignUpContainer>
  );
};

export default Register;

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
