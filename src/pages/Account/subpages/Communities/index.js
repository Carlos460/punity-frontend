import React from "react"

// Import Styled Components
import {SubpageButton, SubpageInput, SubpageTextArea} from '../../styles'

function Communities() {
  return(
    <div>
      <h1>Communities</h1>
      <p>With the help of communities you can ask your own questions in your own group. You can invite up to 100 people and create up to 2 communities. So you can get selected answers from experts of your choice, for example.</p>
      <div>
        <h3><b>Permissions</b></h3>
      
        <h5><b>Owner</b></h5>
        <p>Has full rights to edit, delete questions, invite new people to the community and set permissions. Owner rights are not transferable.</p>
      
        <h5><b>Full</b></h5>
        <p>Full rights have the same rights as owner. The special thing is that these people have joined a community and did not create it themselves.</p>

        <h5><b>P'Uniter</b></h5>     
        <p>Can ask questions within this community, submit them for editing or improvement, comment freely and more.</p>

        <h5><b>Read</b></h5>     
        <p>Read-Permissions. Allowed is to view all information within the community.</p>
      </div>

      <SubpageButton>{`Creat a new Community (2 left)`}</SubpageButton>

      <div>
      <h3><b>Community Name*</b></h3>
      <SubpageInput></SubpageInput>

      <h6>Community Size - Limit the number of people who can join your community</h6>
      <SubpageInput></SubpageInput>

      <h6>Restrict specific people who can't join your community even this people receive the invite Key (seperated by commas)</h6>
      <SubpageTextArea></SubpageTextArea>

      <SubpageButton>Create</SubpageButton>

      <p>* are required fields</p>
      </div>
    </div>
  );
}

export default Communities;
