import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';

import Questions from './pages/Questions';
import QuestionDetail from './pages/QuestionDetail';
import QuestionAsk from './pages/QuestionAsk';

import Account from './pages/Account';
import DeleteAccount from './pages/DeleteAccount';
import ForgetPassword from './pages/ForgetPassword';

import PageNotFound from './pages/PageNotFound';
//CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} status={200}></Route>
        <Route
          exact
          path="/questions"
          component={Questions}
          status={304}
        ></Route>
        <Route
          exact
          path="/questions/ask"
          component={QuestionAsk}
          status={304}
        ></Route>
        <Route
          exact
          path="/questions/:id"
          component={QuestionDetail}
          status={304}
        ></Route>

        <Route
          exact
          path="/account/register"
          component={Register}
          status={304}
        ></Route>
        <Route
          exact
          path="/account/login"
          component={Login}
          status={304}
        ></Route>
        <Route
          exact
          path="/account/forget-password"
          component={ForgetPassword}
          status={304}
        ></Route>
        <Route
          exact
          path="/account/delete"
          component={DeleteAccount}
          status={304}
        ></Route>
        <Route path="/account/" component={Account}></Route>
        <Route exact path="*" component={PageNotFound} status={404}></Route>
      </Switch>
    </div>
  );
}

export default App;
