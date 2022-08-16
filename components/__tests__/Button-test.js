import * as React from "react";
import { render, cleanup } from "@testing-library/react-native";

import Button from "../Button";

const caption = "Login";
const color = "#263344";

describe("<Button>", () => {
	afterEach(cleanup);

	const activeButton = render(<Button title='Login' />);

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
