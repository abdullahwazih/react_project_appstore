import React from 'react'

const App = ({ app }) => {

    const { image, title, description, downloads, ratingAvg } = app
    return (
        <div className="card bg-white w-96 shadow-sm">
            <figure>
                <img className='h-50 w-auto rounded-lg mt-5'
                    src={image}
                    alt="Shoes" />
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
        </div>)
}

export default App