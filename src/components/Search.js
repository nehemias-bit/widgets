import React, { useState, useEffect } from 'react';

const Search = () => {

  const [term, setTerm] = useState("");

  console.log("I run with every render");

  // nothing = run every time component renders and on initial render
  // [] = run at initial render only
  // [data] = run at initial render, and every time specific data changes 
  // array can have multiple elements inside it
  useEffect(() => {
    console.log('I run after every render and at initial render');
  }, [term]);


  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input onChange={e => setTerm(e.target.value)} value={term} className='input' />
        </div>
      </div>
    </div>
  );

}

export default Search;