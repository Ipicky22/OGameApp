import Axios from "axios";

const axios = Axios.create({
	withCredentials: true,
	baseURL: "https://lobby.ogame.gameforge.com/api",
});

async function findServerName(serverToFind: { language: string; number: number }) {
	let allServers: any = await getAllServers();

	if (allServers) {
		let serverName = allServers.find((server: any) => {
			return server.language === serverToFind.language && server.number === serverToFind.number;
		}).name;

		return serverName;
	} else {
		throw new Error("Failed to import servers");
	}
}

async function getAllServers() {
	try {
		const result = await axios.get("https://lobby.ogame.gameforge.com/api/servers");
		return result.data;
	} catch (e) {
		throw new Error("Failed to login");
	}
}

export default findServerName;
