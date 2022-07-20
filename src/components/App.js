import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const options = [{
  label: 'The Color Red',
  value: 'red'
}, {
  label: 'The Color Green',
  value: 'green'
}, {
  label: 'A Shade of Blue',
  value: 'blue'
}];

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end Javascript framework'
//   },
//   {
//     title: 'Why React?',
//     content: 'React is a favorite JS library among engineers'
//   },
//   {
//     title: 'How React?',
//     content: 'You use React by creating components'
//   }];

const App = () => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected} />
    </div>
  );
};

export default App;