import React from 'react'


const SearchBox = ({SearchChange}) =>
{
	return (

       <div className='pa2'>
         <input 
	         type="search" 
	         placeholder="Search Robos" 
	         onChange={SearchChange} 
	         className ='pa3 ba b--green bg-lightest-blue'
         />
       </div>
		);
}

export default SearchBox;