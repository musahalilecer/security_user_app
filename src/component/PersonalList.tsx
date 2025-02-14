import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Personal {
  id: number;
  username: string;
  password: string;
}

const PersonalList: React.FC = () => {
  const [personals, setPersonals] = useState<Personal[]>([]);

  useEffect(() => {
    axios.get<Personal[]>('http://localhost:8080/personals')
      .then(response => setPersonals(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="head">
      <h2>Personal List</h2>
      <div className="personal_list">
        {personals.map(personal => (
          <div key={personal.id}> {/* Use the unique id as the key */}
            <p>Username: {personal.username}</p>
            <p>Password: {personal.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalList;