import React from 'react'
import './SearchBar.css';

function SearchBar({searchVal, setSearchVal}) {

  return (
    <div className='SearchBar'>
        <form className='search-form-container'>
          <div className='search-input-wrapper'>
            <span className="search-logo">x</span>
            <input onChange={(e) => setSearchVal(e.target.value)} value={searchVal} type="text" className='search-input' placeholder='Search user name' />
          </div>
            <span className="filter-logo">f</span>
        </form>
    </div>
  )
}

export {SearchBar}