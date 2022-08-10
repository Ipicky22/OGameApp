import { createContext, Context } from "react";

type GlobalContextType = {
	isAuthenticated: boolean;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const GlobalContext: Context<GlobalContextType> = createContext<GlobalContextType>({
	isAuthenticated: false,
	setIsAuthenticated: (isAuthenticated: boolean) => {},
});

export default GlobalContext;
