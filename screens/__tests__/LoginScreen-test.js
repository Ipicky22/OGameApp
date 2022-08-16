import * as React from "react";
import { render, cleanup } from "@testing-library/react-native";

import LoginSreen from "../LoginScreen";

describe("<LoginScreen>", () => {
	afterEach(cleanup);

	const tree = render(<LoginSreen />).toJSON();

	it("Renders successfully", () => {
		expect(tree).toBeDefined();
	});

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot();
	});
});
