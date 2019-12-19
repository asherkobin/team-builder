import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState(iceAndFireCharacters);
  const [currentMember, setCurrentMember] = useState({});

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  }

  const editTeamMember = (name) => {
   // setCurrentMember(teamMembers.find((tm) =>  {tm.name === name}));
   // console.log(name);
  }
  
  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} currentMember={currentMember} />
      <div className="teamMemberContainer">
      { teamMembers.map(tm => (
          <div key={tm.name} className="teamMember" onClick={editTeamMember(tm.name)}>
            <div>{tm.name}</div>
            <div>{tm.house}</div>
            <div>{tm.location}</div>
          </div>))}
      </div>
    </div>
  );
}

const iceAndFireCharacters = [
  {
    name: "Tyrion Lannister",
    house: "Lannister",
    location: "Mereen"
  },
  {
    name: "Jamie Lannister",
    house: "Lannister",
    location: "Riverlands"
  },
  {
    name: "Bran Stark",
    house: "Stark",
    location: "Everywhere"
  },
  {
    name: "Jon Snow",
    house: "Stark",
    location: "Castle Black"
  },
];

  export default App;
