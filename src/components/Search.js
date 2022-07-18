import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState("lion");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);


  // nothing = run every time component renders and on initial render
  // [] = run at initial render only
  // [data] = run at initial render, and every time specific data changes
  // array can have multiple elements inside it

  useEffect(() => {

    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }

  }, [term]);

  useEffect(() => {

    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceTerm
        },
      });

      setResults(data.query.search);
    }

    search();
  }, [debounceTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input type="text" onChange={e => setTerm(e.target.value)} value={term} className='input' />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  );

}

export default Search;