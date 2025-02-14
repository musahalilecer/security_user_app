import React, { useState } from 'react';
import axios from 'axios';

const PersonalAdd: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/personals', { username, password });
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('There was an error posting the data!', error);
    }
  };

  return (
    <div>
      <h2>Add Personal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonalAdd;