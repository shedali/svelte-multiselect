import {
	array,
	boolean,
	button,
	date,
	files,
	number,
	optionsKnob,
	radios,
	select,
	text,
	withKnobs
} from "@storybook/addon-knobs";

import MultiSelectCreate from "./components/MultiSelectCreate.svelte";

export default {
	title: "MultiSelectCreate",
	decorators: [withKnobs]
};

export const VerticalList = () => ({
	Component: MultiSelectCreate,
	props: {
		vertical: boolean("vertical", true),
		selection: array("selection", ["you", "can", "see"]),
		availableOptions: array("available", ["plum", "tomato"])
	}
});

export const createEnabled = () => ({
	Component: MultiSelectCreate,
	props: {
		canCreate: true,
		selection: array("selection", ["german", "french", "italian"]),
		availableOptions: array("available options", [
			"german",
			"french",
			"italian",
			"english",
			"latin"
		])
	}
});

createEnabled.story = {
	name: "MultiSelect with new item creation enabled",
	parameters: {
		notes: `
	    <h2>Create if item does not exist</h2>
		If the entered item does not match any existing items, user is prompted to add a new item
	  `
	}
};

export const SelectedItem = () => ({
	Component: MultiSelectCreate,

	props: {
		selection: array("selection", ["apple", "banana", "potato"])
	}
});
SelectedItem.story = {
	name: "Multi Select with an item pre-selected",
	parameters: {
		notes: {
			introduction: `
			This one has a preselected item. Use the knobs panel to change the value`,
			Second: "empty"
		}
	}
};

export const noCreate = () => ({
	Component: MultiSelectCreate,
	props: {
		canCreate: false
	}
});

// singleItem.story = {
//     name: 'Note with HTML',
//     parameters: {
//         notes: `
//     <h2>Item</h2>
//     A list of items which adjusts responsively from a narrow horizontal view to a cube view for mobile
//   `,
//     },
// };
