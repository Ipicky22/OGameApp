import Axios from "axios";
import { REACT_APP_USERNAME, REACT_APP_PASSWORD } from "@env";

const axios = Axios.create({
	withCredentials: true,
	baseURL: "https://lobby.ogame.gameforge.com/api",
});

async function login(username?: string, password?: string) {
	// async function login() {
	try {
		const response = await axios.post("https://gameforge.com/api/v1/auth/thin/sessions", {
			autoGameAccountCreation: false,
			gameEnvironmentId: "0a31d605-ffaf-43e7-aa02-d06df7116fc8",
			gfLang: "en",
			// identity: username,
			identity: REACT_APP_USERNAME,
			locale: "en_GB",
			// password: password,
			password: REACT_APP_PASSWORD,
			platformGameId: "1dfd8e7e-6e1a-4eb1-8c64-03c3b62efd2f",
		});

		const { token } = response.data;

		axios.interceptors.request.use((config: any) => {
			config.headers.authorization = `Bearer ${token}`;
			return config;
		});

		const user = await refreshUser();
		return user;
	} catch (e) {
		throw new Error("Failed to login");
	}
}

async function refreshUser() {
	const user = await me();
	user.accounts = await getAccounts();
	return user.accounts;
}

async function me() {
	const { data } = await axios.get("/users/me");
	return data;
}

async function getAccounts() {
	const { data } = await axios.get("/users/me/accounts");
	return sortAccountByLastLogin(data);
}

const sortAccountByLastLogin = (accounts: any[]) => {
	return accounts.sort((a, b) => {
		const da = new Date(a.lastLogin);
		const db = new Date(b.lastLogin);
		return db.getTime() - da.getTime();
	});
};

export default login;
