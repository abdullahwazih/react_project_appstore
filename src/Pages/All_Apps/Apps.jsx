import React, { useState, useEffect } from 'react';
import App from '../../Components/App';
import appErrorImg from '../../assets/App-Error.png'

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err));
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='text-black'>
      <h1 className='text-4xl font-bold text-center mt-5'>Our All Application</h1>
      <p className="text-center">Explore all apps developed by us. We code for millions</p>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search apps by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-150 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {filteredApps.map((app) => (
          <App key={app.id} app={app} />
        ))}
      </div>
      {filteredApps.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src={appErrorImg}
            alt="No apps found"
            className="w-48 h-48 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">No apps found</h2>
          <p className="text-gray-500 text-center px-4">
            We couldn’t find any apps matching your search. Try using different keywords.
          </p>
        </div>
      )}

    </div>
  );
}

export default AllApps;
