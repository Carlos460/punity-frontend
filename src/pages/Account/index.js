import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Import Account SubPages
import AccountSettings from './subpages/AccountSettings';
import ReportBlocking from './subpages/ReportBlocking';
import Security from './subpages/Security';
import Communities from './subpages/Communities';

// Import Components
import DefaultTemplate from '../Layouts/DefaultTemplate';
import Header from '../Components/Header';

// Import Styles
import {
  TitleContainer,
  Title,
  SubTitle,
  AccountContent,
  AccountSideBar,
  SideBarLink,
  AccountBody,
} from './styles';

function Account(props) {
  return (
    <DefaultTemplate>
      <Header backgroundColor={`var(--primary-color)`}>
        <TitleContainer>
          <Title>Your Profile Settings(user.name)</Title>
          <SubTitle>Report Bug</SubTitle>
        </TitleContainer>
      </Header>
      <AccountContent>
        <AccountSideBar>
          <SideBarLink>
            <Link to="/account/">Account Settings</Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/account/reporting">Reporting and Blocking</Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/account/security">Security</Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/account/communities">Communities</Link>
          </SideBarLink>
        </AccountSideBar>
        <AccountBody>
          <Route exact path="/account/" component={AccountSettings}></Route>
          <Route
            exact
            path="/account/reporting"
            component={ReportBlocking}
          ></Route>
          <Route exact path="/account/security" component={Security}></Route>
          <Route
            exact
            path="/account/communities"
            component={Communities}
          ></Route>
        </AccountBody>
      </AccountContent>
    </DefaultTemplate>
  );
}

export default Account;
