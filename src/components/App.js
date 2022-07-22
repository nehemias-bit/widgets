import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';


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

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }];


const App = () => {

  const [selected, setSelected] = useState(options[0]);


  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label='Select a color' />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};

export default App;