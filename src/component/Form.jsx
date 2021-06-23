import React from 'react';

function Form({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input
      placeholder="Enter GitHub Username"
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button onClick={onSubmit}>Add User</button>
    </form>
  );
}

export default Form;
