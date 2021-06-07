import React, { useState } from 'react';

function App() {

  //state
  const [state, setStete] = useState({
    name: "",
  });

  //change
  const handleChange = e => {
    setStete({ ...state, [e.target.name]: e.target.value });
  }

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    alert(state.name);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Form1</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input type="submit" value="push" />
      </form>
    </div>
  );
}

export default App;
