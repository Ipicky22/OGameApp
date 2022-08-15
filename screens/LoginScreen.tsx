import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, TextInput, Image } from "react-native";
import { RootStackScreenProps } from "../navigation/types";
import Button from "../components/Button";
import login from "../api";

const image = require("../assets/images/background2.jpg");

function LoginScreen({ navigation }: RootStackScreenProps<"Login">) {
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
				<Image source={require("../assets/images/Ogame_logo.png")} style={styles.logo} />
				<TextInput
					style={styles.text}
					placeholder='Username'
					onChangeText={setUsername}
					value={username}></TextInput>
				<TextInput
					style={styles.text}
					placeholder='Password'
					onChangeText={setPassword}
					value={password}
					secureTextEntry={true}></TextInput>
				<Button title='Se Connecter' onPress={() => login(navigation)} />
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
});
