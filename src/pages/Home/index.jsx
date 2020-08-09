import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

function Home() {
  const [local, setLocal] = useState('');
  const [vers, setVers] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await api.get('/');
      setLocal(data.data.local.book);
      setVers(data.data.vers);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="vers">
        <h1>{local}</h1>
        <p>
          {vers}
        </p>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M345.642667 822.592c12.629333 12.544 33.130667 12.544 45.76 0L678.613333 536.384c6.741333-6.698667 9.6-15.573333 9.173333-24.384 0.448-8.768-2.410667-17.664-9.173333-24.384L391.402667 201.429333c-12.629333-12.565333-33.130667-12.565333-45.76 0s-12.629333 32.981333 0 45.546667L611.648 512 345.642667 777.045333C333.013333 789.632 333.013333 810.005333 345.642667 822.592z" />
        </svg>
      </div>
    </div >
  );
}

export default Home;