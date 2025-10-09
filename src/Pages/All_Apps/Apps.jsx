import React, { useState, useEffect } from 'react';
import App from '../../Components/App';

const AllApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='text-black'>
      <h1 className='text-4xl font-bold text-center mt-5'>Our All Application</h1>
      <p className ="text-center">Explore all apps developed by us. We code for millions</p>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {apps.map((app) => (
          <App key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}

export default AllApps;
