import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import './SearchPage.css';
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    return (
        <div className="seachPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="searchPage_logo" src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage_headerbody">
                    <Search hideButtons />
                </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link} className="result_link" target="_blank">
                                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                    <img src = {item.pagemap?.cse_image[0]?.src} alt="" className="results_image"/>
                                )}
                                {item.displayLink}
                            </a>
                            <a href={item.link} className="result_title" target="_blank"><h2>{item.title}</h2></a>
                            
                            <p className="result_snippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
