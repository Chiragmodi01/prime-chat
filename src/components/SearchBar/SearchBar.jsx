import React from 'react'
import './SearchBar.css';
import {Search, Filter} from '../../utils/styledIcons';

function SearchBar({searchVal, setSearchVal}) {

  return (
    <div className='SearchBar'>
        <form className='search-form-container'>
          <div className='search-input-wrapper'>
            <span className="search-logo" title='Search'>
              <Search size={15} />
            </span>
            <input onChange={(e) => setSearchVal(e.target.value)} value={searchVal} type="text" className='search-input' placeholder='Search user name' />
          </div>
            <span className="filter-logo" title='Chat filters'>
              <Filter size={22} />
            </span>
        </form>
    </div>
  )
}

export {SearchBar}