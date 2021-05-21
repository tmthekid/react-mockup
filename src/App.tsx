import { FC, useState } from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import { Routes } from "./routes/Routes";
import { AppContext, User } from './AppContext';
import { useMediaQuery } from 'react-responsive';
import './App.scss';

const App:FC = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 62em)' });
  const [expanded, setExpanded] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{ isMobile, expanded, setExpanded, user, setUser }}>
      <Routes />
    </AppContext.Provider>
  );
}

export { App };