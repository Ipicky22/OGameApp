import { createContext, Context } from "react";

type GlobalContextType = {
	serversPlayed: any[];
	setServersPlayed: (serversPlayed: any[]) => void;
};

const GlobalContext: Context<GlobalContextType> = createContext<GlobalContextType>({
	serversPlayed: [],
	setServersPlayed: (serversPlayed: any[]) => {},
});

export default GlobalContext;
