import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *  {
    box-sizing: border-box;
  }

  body {
    background-color: #6495ed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a{
    text-decoration: none;
    color: #000000;
  }
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
