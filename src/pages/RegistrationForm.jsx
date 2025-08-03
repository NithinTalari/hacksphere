import React from 'react';

export default function RegistrationForm() {
  return (
    <form className="registration-form">
      <input type="text" placeholder="Enter your Team Name" required />
      <input type="email" placeholder="Enter Email Address" required />
      <input type="text" placeholder = "Enter Team Leader Full Name" required />
      <input type='text' placeholder = "Enter Team Leader phone number" required />'
      <input type="text" placeholder="Member 1 Full Name" required />
      <input type="text" placeholder="Member 2 Full Name" required />
      <input type="text" placeholder="Member 3 Full Name" required />
       <input type="text" placeholder="Member 4 Full Name (optional)" />
      <button type="submit">Submit Registration</button>
    </form>
  );
}
