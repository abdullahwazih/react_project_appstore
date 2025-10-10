import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import downloadImg from '../../assets/download.png'
import starImg from '../../assets/star.png'
import reviewImg from '../../assets/review.png'
import Example from '../../Components/chart';
import { addAppIdToLocalStorage } from '../../utility/add&get';

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                const selectedApp = data.find(a => a.id === parseInt(id));
                setApp(selectedApp);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!app) return <div>Loading...</div>;

    const handleInstall = () => {
        const success = addAppIdToLocalStorage(app.id);

        if (success) {
            alert(`${app.title} installed successfully!`);
        } else {
            alert(`"${app.title}" is already installed!`);
        }
    };


    return (
        <>

            <div className="bg-white ml-30 mt-5">

                <div className="flex">
                    <img
                        src={app.image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />

                    {/* Text Section */}
                    <div className="text-black ml-5 flex flex-col justify-between">
                        {/* Top Section */}
                        <div>
                            <h1 className="text-2xl font-bold">{app.title}</h1>
                            <p>Developed by: {app.companyName}</p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex gap-8 mt-5">
                            <div className="flex flex-col items-center">
                                <img src={downloadImg} className="h-8 w-8" />
                                <p className="text-3xl font-bold mt-2">{app.downloads}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={starImg} className="h-8" />
                                <p className="text-3xl font-bold mt-2">{app.ratingAvg}</p>
                            </div >
                            <div className="flex flex-col items-center">
                                <img src={reviewImg} className="h-8" />
                                <p className="text-3xl font-bold mt-2">{app.reviews}</p>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-5" onClick={handleInstall}>
                            Install Now ({app.size}MB)
                        </button>
                    </div>

                </div>

            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <Example data={app.ratings} />

            <hr className="border-t-2 border-gray-300 my-4" />

            <div className="mt-4  mx-auto p-4">
                <p className="text-gray-700">{app.description}</p>
            </div>
        </>

    );
};

export default AppDetails;
