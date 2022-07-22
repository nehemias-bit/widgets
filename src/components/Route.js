import { useEffect, useState } from "react";

const Route = ({ path, children }) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {

    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    //listening to the popstate event thrown by the Link component
    //when an anchor is clicked.
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  });

  return currentPath === path ? children : null;

}

export default Route;