import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TweetList from './components/TweetList';
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';
import { TweetProvider } from './contexts/TweetProvider';

function App() {
  return (
    <UserProvider>
      <TweetProvider>
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={ <Header /> } >
                  <Route index element={<TweetList />} />
                  <Route path="signin" element={ <SignIn /> } />
                  <Route path="signup" element={ <SignUp /> } />
                  <Route path="tweets" element={ <TweetList /> } />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
      </TweetProvider>
    </UserProvider>
  );
}

export default App;


