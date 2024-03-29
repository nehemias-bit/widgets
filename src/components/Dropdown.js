import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }
    //this event listener will run anytime something inside
    //the DOM is clicked
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      console.log("clean up of Dropdown useEffect");
      document.body.addEventListener('click', onBodyClick, {
        capture: true
      });
    }

  }, []);

  const renderedOptions = options.map((option) => {

    if (selected.value === option.value) {
      return null;
    }

    return (
      <div onClick={() => {
        onSelectedChange(option);
      }} key={option.value} className='item'>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div onClick={() => {
          setOpen(!open);
        }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;