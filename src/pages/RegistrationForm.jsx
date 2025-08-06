// src/pages/RegistrationForm.jsx
import React, { useState } from 'react';

export default function RegistrationForm() {
  const [teamName, setTeamName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState(['']);
  const maxMembers = 5;

  const handleMemberChange = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    if (members.length < maxMembers) {
      setMembers([...members, '']);
    } else {
      alert(`Maximum ${maxMembers} members allowed.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      teamName,
      college,
      email,
      members,
    });
    alert('Team registered (UI only)');
  };

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <h3>Team Registration Form</h3>

      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="College / Organization"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Team Leader Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="member-section">
        <label>Team Members (Max 5):</label>
        {members.map((member, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Member ${index + 1} Name`}
            value={member}
            onChange={(e) => handleMemberChange(index, e.target.value)}
            required
          />
        ))}
        {members.length < maxMembers && (
          <button type="button" className="add-btn" onClick={addMember}>
            + Add Member
          </button>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Register Team
      </button>
    </form>
  );
}
