import { createContext, Context } from "react";

type currentServerType = {
	gameAccountId?: number;
	id?: number;
	language?: string;
	name?: string;
	rank?: string;
	serveur?: number;
	serverName?: string;
};

type GlobalContextType = {
	currentServer: currentServerType;
	setCurrentServer: (currentServer: currentServerType) => void;
	serversPlayed: any[];
	setServersPlayed: (serversPlayed: any[]) => void;
};

const GlobalContext: Context<GlobalContextType> = createContext<GlobalContextType>({
	currentServer: {},
	setCurrentServer: (currentServer: currentServerType) => {},
	serversPlayed: [],
	setServersPlayed: (serversPlayed: any[]) => {},
});

export default GlobalContext;
