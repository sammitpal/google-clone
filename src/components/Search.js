import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({hideButtons = false}) {
    const [{},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    
    const search = e => {
        
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SERCH_TERM,
            term: input
        })
        history.push("/search");
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_searchIcon"/>
                <input type="text" name="" id="" value={input} onChange={e=> setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                         <Button type = "submit" onClick = {search} variant="outlined">Google Search</Button>
                         <Button variant="outlined">I'm Feeling Lucky</Button>
                 </div>
            ): (
                <div className="search_buttonshide">
                        <Button type = "submit" onClick = {search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search
