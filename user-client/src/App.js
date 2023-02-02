import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';
import { TweetProvider } from './contexts/TweetProvider';
import EditTweet from './components/EditTweet';

function App() {
  return (
    <UserProvider>
      <TweetProvider>
      <div>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={ <Header /> } >
                    <Route index element={<Home />} />
                    <Route path="signin" element={ <SignIn /> } />
                    <Route path="signup" element={ <SignUp /> } />
                    <Route path="edit/:id" element={ <EditTweet /> } />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
      </TweetProvider>
    </UserProvider>
  );
}

export default App;


