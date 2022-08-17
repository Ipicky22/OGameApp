import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = ({ children }: any): JSX.Element => {
	const [serversPlayed, setServersPlayed] = useState<any[]>([]);

	const value = {
		serversPlayed,
		setServersPlayed,
	};

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
