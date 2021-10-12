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
      />
      <input 
        type="tel"
        value={phone}
        pattern="\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*"
        onChange={({target}) => {setPhone(target.value)}}
        required
      />
      <input 
        type="email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};
