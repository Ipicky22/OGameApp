import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = ({ children }: any): JSX.Element => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	return <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
