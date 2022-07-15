import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const App = () => {

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end Javascript framework'
    },
    {
      title: 'Why React?',
      content: 'React is a favorite JS library among engineers'
    },
    {
      title: 'How React?',
      content: 'You use React by creating components'
    }];

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;