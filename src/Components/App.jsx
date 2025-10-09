import React from 'react';
import { useNavigate } from 'react-router';

const App = ({ app }) => {
    const { id, image, title, description, downloads, ratingAvg } = app;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/app/${id}`);
    };

    return (
        <div
            className="card bg-white w-96 shadow-sm cursor-pointer hover:shadow-md transition"
            onClick={handleClick}
        >
            <figure>
                <img
                    className="h-50 w-auto rounded-lg mt-5"
                    src={image}
                    alt={title}
                />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="mt-auto">
                    <div className="flex justify-between rounded">
                        <div className="bg-gray-200 p-1 rounded-lg text-blue-500">
                            {downloads}
                        </div>
                        <div className="bg-gray-200 p-1 rounded-lg text-red-500">
                            {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
