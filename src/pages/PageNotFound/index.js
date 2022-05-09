import React from 'react';
import DefaultTemplate from '../Layouts/DefaultTemplate';
// Import Components
import Header from '../Components/header';

function PageNotFound() {
  return (
    <DefaultTemplate>
      <Header backgroundColor={`var(--primary-color)`}>
        <h1>
          <center>404 Page not found</center>
        </h1>
        <p1>
          <center>
            Are you sure you typed that correctly? If you think that this link
            should be working, try contacting support.
          </center>
        </p1>
      </Header>
    </DefaultTemplate>
  );
}

export default PageNotFound;
