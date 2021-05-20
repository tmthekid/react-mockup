import { FC, useState } from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import { Routes } from "./routes/Routes";
import { AppContext } from './AppContext';
import { useMediaQuery } from 'react-responsive';
import './App.scss';

const App:FC = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 62em)' });
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isMobile, expanded, setExpanded }} >
      <Routes />
    </AppContext.Provider>
  );
}

export { App };