import { FC, useState, useLayoutEffect } from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import { Routes } from "./routes/Routes";
import { AppContext, User } from './AppContext';
import './App.scss';

const App:FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useLayoutEffect(() => window.addEventListener('resize', function(){
    setIsMobile(window.innerWidth < 991);
  }), [setIsMobile]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{ isMobile, expanded, setExpanded, user, setUser }}>
      <Routes />
    </AppContext.Provider>
  );
}

export { App };