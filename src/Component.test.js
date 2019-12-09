// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Component from "./components/MultiSelectCreate.svelte";
import { SelectedItem } from "./MultiSelectCreate.stories";
import { getByTestId } from "@testing-library/dom";

test("should display the text `select`", () => {
	const comp = render(SelectedItem().Component, { selectedValue: "hel" });
	expect(comp.getByText("select")).toBeTruthy();
});

test("should accept and display a list of selected items", () => {
	const comp = render(SelectedItem().Component, { selection: ["first-item"] });
	expect(getByTestId(document, "selected-items")).toBeVisible();
	expect(getByTestId(document, "selected-item")).toBeVisible();
	expect(
		document.querySelector("[data-testid=selected-item]:first-child span")
	).toHaveTextContent("first-item");
});

test("should remove item when close clicked", async () => {
	const comp = render(SelectedItem().Component, { selection: ["first-item"] });
	expect(
		document.querySelector("[data-testid=selected-item]:first-child span")
	).toHaveTextContent("first-item");
	const close = getByTestId(document, "remove-cross");
	expect(close).toBeInTheDocument();
	await fireEvent(
		close,
		new MouseEvent("click", {
			bubbles: true,
			cancelable: true
		})
	);
	expect(close).not.toBeInTheDocument();
});
