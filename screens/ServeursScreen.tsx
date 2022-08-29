import React, { useState, useContext, useEffect, Suspense } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { RootStackScreenProps } from "../navigation/types";
import Button from "../components/Button";
import GlobalContext from "../context/GlobalContext";

const image = require("../assets/images/background2.jpg");

function ServeursScreen({ navigation }: RootStackScreenProps<"Serveurs">) {
	const { serversPlayed, setCurrentServer } = useContext(GlobalContext);
	const [selectedCard, setSelectedCard] = useState();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const toggleCard = (card: any) => {
		setSelectedCard(card);
	};

	const dynamicBorder = (card: any) => {
		if (selectedCard == card) {
			return {
				borderColor: "white",
				borderWidth: 2,
				border: "solid",
			};
		} else {
			return null;
		}
	};

	const goPlay = () => {
		if (selectedCard) {
			setIsLoading(true);
			setCurrentServer(selectedCard);
			setTimeout(() => navigation.navigate("Home"), 100);
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
				<View style={styles.table}>
					<View style={styles.header}>
						<Text style={styles.title}>Univers</Text>
						<Text style={styles.title}>Player</Text>
						<Text style={styles.title}>Rank</Text>
					</View>

					{serversPlayed.map((item, key) => {
						return (
							<TouchableOpacity
								activeOpacity={0.8}
								style={[styles.card, dynamicBorder(item)]}
								key={key}
								onPress={() => toggleCard(item)}>
								<Text style={styles.text}>{item.serverName}</Text>
								<Text style={styles.text}>{item.name}</Text>
								<Text style={styles.text}>{item.rank}</Text>
							</TouchableOpacity>
						);
					})}
				</View>
				<Button title='Play' onPress={() => goPlay()} disabled={selectedCard ? false : true} spin={isLoading} />
			</ImageBackground>
		</SafeAreaView>
	);
}

export default ServeursScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	table: {
		width: "80%",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 8,
		paddingVertical: 8,
		borderRadius: 10,
		backgroundColor: "#0C1C2C",
	},
	title: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "bold",
		color: "#fff",
	},
	card: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 8,
		paddingVertical: 8,
		borderRadius: 10,
		marginTop: 8,
		backgroundColor: "#0E1F31",
	},
	text: {
		fontSize: 16,
		lineHeight: 24,
		color: "#fff",
		// center text
		textAlign: "center",
	},
});
