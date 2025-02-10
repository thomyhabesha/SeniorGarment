import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SystemMetrics = () => {
  const [uptime, setUptime] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/uptime')
      .then(response => {
        setUptime(response.data.uptime);
      })
      .catch(error => {
        console.error('Error fetching uptime:', error);
      });
  }, []);

  return (
    <div>
      <h3>System Uptime: {uptime ? `${uptime} seconds` : 'Loading...'}</h3>
    </div>
  );
};

export default SystemMetrics;
