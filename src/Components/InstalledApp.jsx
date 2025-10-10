import React from 'react'
import { removeAppId } from '../utility/add&get';

const InstalledApp = ({ app, onUninstall }) => {
    const { id, image, title, description, downloads, ratingAvg, size } = app;

    function handleUninstall() {
        // removeAppId(id);

        if (onUninstall) {
            onUninstall(id);
        }
    }

    return (
        <div
            className="bg-white w-96 shadow-sm cursor-pointer hover:shadow-md transition flex items-center  w-full m-2 shadow-lg rounded-lg p-5"

        >
            <figure>
                <img
                    className="h-20 w-auto rounded-lg"
                    src={image}
                    alt={title}
                />
            </figure>

            <div className="text-black ml-5 flex flex-col justify-between h-full">
                <h2 className="card-title mb-4">{title}</h2>

                <div className="flex-grow"></div>

                <div className="flex justify-between rounded gap-2 text-sm mb-1">
                    <div className="bg-gray-200 p-1 rounded-lg text-blue-500">{downloads}</div>
                    <div className="bg-gray-200 p-1 rounded-lg text-red-500">{ratingAvg}</div>
                    <div className="bg-gray-200 p-1 rounded-lg text-red-500">{size}MB</div>
                </div>
            </div>

            <button className="btn btn-outline btn-primary ml-285 " onClick={handleUninstall}>Uninstall</button>



        </div>
    );
}

export default InstalledApp