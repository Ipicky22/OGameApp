import React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../navigation/types";

export default function LoginScreen({ navigation }: RootStackScreenProps<"Login">) {
	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button title='Go to Serveurs' onPress={() => navigation.navigate("Serveurs")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
