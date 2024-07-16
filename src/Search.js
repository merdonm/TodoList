import React from 'react'

const Search = ({search,setSearch}) => {

  return (
    <form className='searchForm'>
        <label htmlFor='Search Box'>
            Search box
        </label>
        <input 
              
            placeholder='Search Box'
            type='text'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            
        />
    </form>
  )
}

export default Search