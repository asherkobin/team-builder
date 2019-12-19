import React, { useState } from 'react';

const Form = ({ addTeamMember }) => {
  const [teamMember, setTeamMember] = useState({ name: "", house: "", location: "" });
  
  const submitForm = e => {
    e.preventDefault();
    addTeamMember(teamMember);
    setTeamMember({ name: "", house: "", location: "" });
  }

  const handleChanges = e => {
    setTeamMember({...teamMember, [e.target.name] : e.target.value});
  }
  
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChanges} value={teamMember.name} />
      
      <label htmlFor="house">House:</label>
      <input type="text" id="house" name="house" onChange={handleChanges} value={teamMember.house} />
      
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" onChange={handleChanges} value={teamMember.location} />
      
      <input type="submit" value="Add Character"/>
    </form>);
}

export default Form;