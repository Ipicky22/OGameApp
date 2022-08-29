import { useState } from "react";
import GlobalContext from "./GlobalContext";

type currentServerType = {
	gameAccountId?: number;
	id?: number;
	language?: string;
	name?: string;
	rank?: string;
	serveur?: number;
	serverName?: string;
};

const GlobalContextProvider = ({ children }: any): JSX.Element => {
	const [serversPlayed, setServersPlayed] = useState<any[]>([]);
	const [currentServer, setCurrentServer] = useState<currentServerType>({});

	const value = {
		currentServer,
		setCurrentServer,
		serversPlayed,
		setServersPlayed,
	};

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
