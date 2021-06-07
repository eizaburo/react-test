import React, { useState } from 'react';
import axios from 'axios';

function App() {

  //state
  const [state, setStete] = useState({
    name: "default",
    message: "...",
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

  //api call
  const handleClick = async () => {
    //Azure Functionsをcall（ローカルではCORS対応必要：package.jsonにproxyする）
    const result = await axios.get(`/api/getData?name=${state.name}`);
    setStete({ ...state, message: result.data })
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
      <button onClick={handleClick}>api call</button>
      <p>message: {state.message}</p>
    </div>
  );
}

export default App;
