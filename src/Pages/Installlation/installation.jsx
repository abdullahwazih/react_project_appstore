import React, { useEffect, useState } from 'react'
import { getAppId, removeAppId } from '../../utility/add&get';
import InstalledApp from '../../Components/InstalledApp';

const installation = () => {

  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');



  useEffect(() => {
    const appIds = getAppId();
    fetch('/apps.json')
      .then(res => res.json())
      .then(data => {
        const installed = data.filter(app => appIds.includes(app.id));
        console.log(installed);
        setInstalledApps(installed);
      })
      .catch(err => console.error(err));
  }, []);

  function handleUninstall(id) {
    removeAppId(id);
    setInstalledApps(prevApps => prevApps.filter(app => app.id !== id));

  }

  function sortApps(order) {
    const sorted = [...installedApps].sort((a, b) =>
      order === 'asc' ? a.size - b.size : b.size - a.size
    );
    setInstalledApps(sorted);
    setSortOrder(order);
  }
  return (

    <div className="text-black">
      <h1 className="text-4xl font-bold text-center mt-5">Installed Applications</h1>
      <p className="text-center font-light mt-5">Explore all apps you have installed. We code for millions</p>
      <div className="bg-gray-100 p-5 mt-10 ml-20 mr-20 rounded-lg shadow-lg">
        <div className='flex justify-between items-center'>
          <h3 className="font-bold text-2xl">Total Installed Apps : {installedApps.length}</h3>

          <div className="dropdown dropdown-end text-white">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size {sortOrder === 'asc' ? '⬇️' : '⬆️'}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => sortApps('asc')}>Ascending</a>
              </li>
              <li>
                <a onClick={() => sortApps('desc')}>Descending</a>
              </li>
            </ul>
          </div>
        </div>
        {
          installedApps.map(app => <InstalledApp key={app.id} app={app} onUninstall={handleUninstall} />)
        }
      </div>

    </div>)
}

export default installation