import Axios from "axios";
import { REACT_APP_USERNAME, REACT_APP_PASSWORD } from "@env";

const axios = Axios.create({
	withCredentials: true,
	baseURL: "https://lobby.ogame.gameforge.com/api",
});

async function login(navigation) {
	try {
		const response = await axios.post("https://gameforge.com/api/v1/auth/thin/sessions", {
			autoGameAccountCreation: false,
			gameEnvironmentId: "0a31d605-ffaf-43e7-aa02-d06df7116fc8",
			gfLang: "en",
			identity: REACT_APP_USERNAME,
			locale: "en_GB",
			password: REACT_APP_PASSWORD,
			platformGameId: "1dfd8e7e-6e1a-4eb1-8c64-03c3b62efd2f",
		});
		const { token } = response.data;
		console.log("token", token);

		// let cookie = "";
		// console.log("response.headers", response.headers);
		// if (response.headers["set-cookie"][0]) {
		// 	cookie = response.headers["set-cookie"][0];
		// }

		axios.interceptors.request.use((config) => {
			// config.headers.cookie = cookie;
			config.headers.authorization = `Bearer ${token}`;
			console.log("config", config);
			return config;
		});
		await refreshUser();
		navigation.navigate("Serveurs");
	} catch (e) {
		console.log("error", e);
		throw new Error("Failed to login");
	}
}

async function refreshUser() {
	user = await me();
	console.log(`Connected with ${user.email}`);
	user.accounts = await getAccounts();
}

async function me() {
	const { data } = await axios.get("/users/me");
	console.log("me", data);
	return data;
}

async function getAccounts() {
	const { data } = await axios.get("/users/me/accounts");
	console.log("accounts", data);
	return sortAccountByLastLogin(data);
}

const sortAccountByLastLogin = (accounts) => {
	return accounts.sort((a, b) => {
		const da = new Date(a.lastLogin);
		const db = new Date(b.lastLogin);
		return db.getTime() - da.getTime();
	});
};

export default login;
