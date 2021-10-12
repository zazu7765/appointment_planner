import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={({target}) => {setName(target.value)}}
        required
        placeholder="Contact Name"
      />
      <input 
        type="tel"
        value={phone}
        pattern="\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*"
        onChange={({target}) => {setPhone(target.value)}}
        required
        placeholder= "###-###-####"
      />
      <input 
        type="email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        required
        placeholder= "email@example.com"
      />
      <input
        type="submit"
      />
    </form>
  );
};
