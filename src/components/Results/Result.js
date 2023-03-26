import React from 'react'
import '../../styles/components/Results/result.css';
const Result = ({ title, url, description }) => {
    return (
        <div className='result' align='left'  >
            <h2>
                <a href={url} className='result-title'>{title}</a>
            </h2>
            <a href={url} className='result-url'>{url}</a>
            <p>{description}</p>
        </div>
    )
}
export default Result;
