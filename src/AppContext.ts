import { createContext, Dispatch, SetStateAction } from 'react';

export interface User {
	name: String;
}

export interface AppContextType {
	isMobile: boolean;
	expanded: boolean;
	setExpanded: Dispatch<SetStateAction<boolean>>;
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
