import React from "react"
// Import Styled Components
import {SubpageButton, SubpageInput, SubpageTextArea} from '../../styles'


function AccountSettings() {
  return(
    <div>
      <h1>Acount Settings</h1>
      <p>Change your account data, private settings, notifications and more here.</p>
      <SubpageButton>What my profile looks like</SubpageButton>
      <br/>
      <div>
        <h4><b>Your Preferneces</b></h4>
        <br/>
        <h4>Username</h4>
        <SubpageInput placeholder={`user.name`}></SubpageInput>
        <h4>Email</h4>
        <SubpageInput></SubpageInput>
        <h4>Old Password</h4>
        <SubpageInput></SubpageInput>
        <h4>New Password</h4>
        <SubpageInput></SubpageInput>
        <h4>Bio:</h4>
        <SubpageTextArea placeholder={`This is my placeholder`}></SubpageTextArea>
        <br/>
        <h4><b>Tags</b></h4>
        <p>Tags are assigned to you dynamically, to which topics you comment, post something and are interested in it.</p>
        <p>Current Tags:</p>
      </div>

      <div>
        <h4><b>Privacy</b></h4>

        <input type={`checkbox`}></input>
        <lable>Hide my email adress from other users</lable>
        <br />
        <input type={`checkbox`}></input>
        <lable>Hide my questions from other users</lable>
        <p>All your data is still visible for you. Go further up the page and click on "What my profile looks like".</p>
      </div>

      <div>
        <h4><b>Notifications</b></h4>
        <p>Note: Notifications do not become active for people that you have blocked</p>

        <input type={`checkbox`}></input>
        <lable>Notfiy me whenever a user comments on my question (You will recieve a lot of emails for your questions comments)</lable>
        <br/>

        <input type={`checkbox`}></input>
        <lable>Notify me when a pecific user comments on my questions (Seperate usernames with commas, eg. prodigy,Jupiter1)</lable>
        <br/>
        
        <SubpageInput></SubpageInput>
        <br/>

        <input type={`checkbox`}></input>
        <lable>Notify me when a specific user creates a question (Separated by commas)</lable>
        <br/>

        <SubpageInput></SubpageInput>

        <p>You are giving us consent to share this data wherever your user profile appears, except your email and questions if you hide these.</p>
        
        <SubpageButton>Update Settings</SubpageButton>
      </div>
    </div>
  );
}

export default AccountSettings;