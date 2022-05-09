import React from "react"

// Import Styled Components
import {SubpageButton, SubpageTextArea} from '../../styles'

function ReportingBlocking() {
  return(
    <div>
      <h1>Reporting and Blocking</h1>
      <p>
      In this section you can report questions and block users that you don't
      think fit this forum, are sexually offensive or you don't get along with.
      We will give you prompt feedback and act accordingly.
      </p>
      <p>Alternatively, you can also fill out this contact form or write an e-mail directly to contact@prodigy-official.de</p>

      <div>
        <h4><b>Reports</b></h4>
        <p>You are allowed to submit 2 open reports at the same time.</p>
        <SubpageButton>Create a New Report</SubpageButton>

        <p>(No Data Found)</p>
      </div>

      <div>
        <h4><b>Block a User</b></h4>
        <p>Blocked users can't see your profile, no questions and no comments from you.</p>
        <p>If you want to block more than one user, you should separate the usernames with a comma.</p>

        <SubpageTextArea></SubpageTextArea>
        <SubpageButton>Block Now</SubpageButton>
      </div>
    </div>
  );
}

export default ReportingBlocking;