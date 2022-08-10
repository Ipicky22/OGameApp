import React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function ServeursScreen({ navigation }: RootStackScreenProps<"Serveurs">) {
	return (
		<View style={styles.container}>
			<Text>Serveurs Screen</Text>
			<Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
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
