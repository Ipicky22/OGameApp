import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

type ButtonProps = {
	title: string;
	onPress: () => void;
};

const Button = ({ onPress, title }: ButtonProps): JSX.Element => {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#263344",
		justifyContent: "center",
		paddingHorizontal: 32,
		alignItems: "center",
		paddingVertical: 12,
		borderRadius: 10,
		elevation: 3,
		width: "60%",
	},
	text: {
		letterSpacing: 0.25,
		fontWeight: "bold",
		color: "#c8d1da",
		fontSize: 16,
	},
});
