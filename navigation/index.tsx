import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabParamList } from "./types";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import ServeursScreen from "../screens/ServeursScreen";
import LoginScreen from "../screens/LoginScreen";

export default function Navigation(): JSX.Element {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator(): JSX.Element {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name='Serveurs' component={ServeursScreen} options={{ headerShown: false }} />
			<Stack.Screen name='Home' component={BottomTabNavigator} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator(): JSX.Element {
	return (
		<Tab.Navigator>
			<Tab.Screen name='TabOne' component={TabOneScreen} options={{ headerShown: false }} />
			<Tab.Screen name='TabTwo' component={TabTwoScreen} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
}
