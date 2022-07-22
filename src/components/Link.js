import React from 'react';

const Link = ({ className, href, children }) => {

  const onClick = (event) => {

    //allows you to do a cmd click on a link and it automatically
    //take you to that page, but on a different window
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    //allows you to change the url without changing the content of the 
    //the screen
    window.history.pushState({}, '', href);

    //creating a PopStateEvent and passing it to dispatchEvent allows us 
    //to tell other components that the url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;