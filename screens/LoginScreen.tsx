import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, TextInput, Image, Text, Keyboard } from "react-native";
import { RootStackScreenProps } from "../navigation/types";
import Button from "../components/Button";
import login from "../api";
import GlobalContext from "../context/GlobalContext";

const image = require("../assets/images/background2.jpg");

function LoginScreen({ navigation }: RootStackScreenProps<"Login">) {
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [errorLogin, setErrorLogin] = useState<boolean>(false);

	const { setServersPlayed } = useContext(GlobalContext);

	const handleLogin = async () => {
		const resultLogin = await login(username, password);

		if (resultLogin) {
			const simplifiedData: any[] = [];

			resultLogin.map((item: any) => {
				let simplifiedItem = {
					name: item.name,
					gameAccountId: item.gameAccountId,
					id: item.id,
					server: item.server.number,
					language: item.server.language,
					rank: item.details[0].value,
				};

				simplifiedData.push(simplifiedItem);
			});

			setServersPlayed(simplifiedData);
			navigation.navigate("Home");
		} else {
			setErrorLogin(true);
		}

		setUsername("");
		setPassword("");
	};

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
				<Image source={require("../assets/images/Ogame_logo.png")} style={styles.logo} />
				<TextInput
					style={styles.text}
					placeholder='Username'
					onChangeText={setUsername}
					value={username}
					onSubmitEditing={Keyboard.dismiss}></TextInput>
				<TextInput
					style={styles.text}
					placeholder='Password'
					onChangeText={setPassword}
					value={password}
					secureTextEntry={true}
					onSubmitEditing={Keyboard.dismiss}></TextInput>
				<Button title='Login' onPress={() => handleLogin()} />
				{errorLogin && <Text style={styles.error}>Invalid username or password</Text>}
			</ImageBackground>
		</SafeAreaView>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		marginBottom: 64,
	},
	text: {
		backgroundColor: "#c8d1da",
		fontWeight: "bold",
		marginBottom: 16,
		borderRadius: 10,
		borderWidth: 1,
		fontSize: 16,
		width: "60%",
		padding: 10,
	},
	error: {
		color: "red",
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
		marginTop: 16,
	},
});
