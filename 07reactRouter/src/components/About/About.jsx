import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development is characterized by a community of dedicated and enthusiastic
                            developers. These individuals bring a wealth of creativity and expertise to their
                            projects, ensuring that applications are both functional and innovative.
                        </p>
                        <p className="mt-4 text-gray-600">
                            This collective effort creates powerful and dynamic applications that redefine the
                            limits of web technology, turning ideas into extraordinary digital experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}