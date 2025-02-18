import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { App } from "./app.jsx";
import "@testing-library/jest-dom";

const SELECT_USER_LABEL = /select user/i;
const FEATURE_1_LABEL = /feature1/i;
const FEATURE_2_LABEL = /feature2/i;
const FEATURE_3_LABEL = /feature3/i;
const CART_DESIGN_A_LABEL = /cart design a/i;
const CART_DESIGN_B_LABEL = /cart design b/i;

describe("App Component", () => {
	it("renders DropDownSelect component", () => {
		render(<App />);
		const dropDownSelect = screen.getByLabelText(SELECT_USER_LABEL);
		expect(dropDownSelect).toBeInTheDocument();
	});

	it("renders Feature1 component", () => {
		render(<App />);
		const feature1 = screen.getByText(FEATURE_1_LABEL);
		expect(feature1).toBeInTheDocument();
	});

	it("renders Feature2 component", () => {
		render(<App />);
		const feature2 = screen.getByText(FEATURE_2_LABEL);
		expect(feature2).toBeInTheDocument();
	});

	it("renders Feature3 component", () => {
		render(<App />);
		const feature3 = screen.getByText(FEATURE_3_LABEL);
		expect(feature3).toBeInTheDocument();
	});

	it("renders Cart component", () => {
		render(<App />);
		const cart = screen.getByText(CART_DESIGN_A_LABEL);
		expect(cart).toBeInTheDocument();
	});

	it("renders Cart2 component", () => {
		render(<App />);
		const cart2 = screen.getByText(CART_DESIGN_B_LABEL);
		expect(cart2).toBeInTheDocument();
	});
});
