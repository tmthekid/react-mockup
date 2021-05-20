import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
	isMobile: boolean;
	expanded: boolean;
	setExpanded: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
