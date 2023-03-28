import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Result from './Result';

//Component that return a list of result from bing search API
const Results = () => {
    const webResults = useSelector(state => state.search.results);
    useEffect(() => {
        console.log(webResults);

    }, [webResults])

    return (
        <>
            <div align='left' data-testid='search-results'>
                {(webResults.length > 0) ? <div>Approximately {webResults.length} results</div> : <></>}
            </div>
            {webResults.map((result,i) => (
                <Result key={i} title={result.name} description={result.snippet} url={result.url}></Result>
            ))}
        </>
    )
}

export default Results;