import * as React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, wait, screen, cleanup, waitFor } from "@testing-library/react-native";

import Button from "../Button";

const caption = "Se Connecter";
const color = "#263344";

describe("<Button>", () => {
	afterEach(cleanup);

	const buttonCallbackFunction = jest.fn();
	const activeButton = render(
		<Button title='Se Connecter' onPress={() => console.log("Button Press Test")} testID='button' />
	);

	const button = activeButton.toJSON();

	it("Renders successfully", () => {
		expect(activeButton).toBeDefined();
	});

	it("Renders correctly", () => {
		expect(button).toMatchSnapshot();
	});

	it("Outputs the correct text", () => {
		const buttonText = button.children[0].children[0];
		expect(buttonText).toBe(caption);
	});

	it("Renders with color #263344", () => {
		const backgroundColorOnTestElem = button.props.style.backgroundColor;
		expect(backgroundColorOnTestElem).toBe(color);
	});
});
