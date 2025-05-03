import React from 'react'
import "../index.css";
import notfound from '../assets/404.jpg';

function Box({ image, date, author, CardTitle, CardDescription, url }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    return (
        <div className="max-w-[700px] rounded-xl bg-white p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-full">
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className="overflow-hidden flex-shrink-0 rounded-lg group">
                        <img 
                            src={image ? image : notfound} 
                            alt={CardTitle} 
                            className="w-full md:w-[250px] h-[200px] rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    <div className='flex flex-col justify-center flex-grow p-4'>
                        <div>
                            <div className="flex gap-3 items-center mb-2">
                                <span className="px-3 py-1 text-xs font-medium text-gray-600 rounded-full">
                                    {author ? author.slice(0, 30) + "..." : "Unknown"}
                                </span>
                                <span className='text-gray-600'> || </span>
                                <span className="px-3 py-1 text-xs font-medium text-gray-600 rounded-full">
                                    {formatDate(date)}
                                </span>
                            </div>
                            <h4 className="text-[var(--black-color)] mb-2 text-xl font-bold line-clamp-2 hover:text-[var(--primary-color)] transition-colors duration-200">
                                {CardTitle}
                            </h4>
                            <p className="text-gray-600 line-clamp-3 mb-3 text-base">
                                {CardDescription}
                            </p>
                        </div>
                        
                        <div className="flex items-center pt-4">
                            <a 
                                href={url} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="box_button inline-flex items-center text-sm font-medium text-[var(--highlight-color)] bg-[var(--primary-color)] rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-md"
                            >
                                Read more
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;