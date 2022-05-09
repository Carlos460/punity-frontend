import React from "react"
// Import Styled Components
import {SubpageButton, SubpageButtonContainer} from '../../styles'

function Security() {
  return(
    <div>
      <h1>Security</h1>
      <p>Manage suspicious logins from other people, activities and more. This area is solely responsible for the security of your account.</p>
      <div>
        <h4><b>Two-Factor Authentication</b></h4>
        <p>Multi-factor Authentication, also known as MFA or multi-step verification (2FA), adds another layer of security. Enable Two-Factor Authentication to improve your account security.</p>
        <p>Without an internet connection you can use the Google Authenticator on your smartphone and log in to your account.</p>
        <p>Enable Two-Factor Authentication using an app like Google Authenticator. Learn more about Two-Factor Authentication</p>

        <SubpageButton>Enable Two-Factor Authentication</SubpageButton>
      </div>
      <div>
        <h4><b>Login History</b></h4>
        <p>Here you can see the last 10 login activites. Who and at what time logged in with their IP address under your name.</p>
        <SubpageButtonContainer>
          <SubpageButton>Reload</SubpageButton>
          <SubpageButton>Start Live Update</SubpageButton>
        </SubpageButtonContainer>
        <p>(No Data Found)</p>
        <h2>Activity Monitor</h2>
      </div>
    </div>
  );
}

export default Security;