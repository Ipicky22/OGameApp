import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import GlobalContextProvider from "./context/GlobalProvider";

export default function App() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<GlobalContextProvider>
					<Navigation />
					<StatusBar />
				</GlobalContextProvider>
			</SafeAreaProvider>
		);
	}
}
