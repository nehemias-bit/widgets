import React from 'react';
import Accordion from './Accordion';

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
      <Accordion items={items} />
    </div>
  );
};

export default App;