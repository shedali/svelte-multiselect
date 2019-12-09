import { array, boolean, button, date, files, number, optionsKnob, radios, select, text, withKnobs } from "@storybook/addon-knobs";

import MultiSelectCreate from "./components/MultiSelectCreate.svelte";

export default {
	title: "MultiSelectCreate",
	decorators: [withKnobs]
};

export const createEnabled = () => ({
	Component: MultiSelectCreate,
	props: {
		canCreate: true
	}
});

createEnabled.story = {
	name: 'MultiSelect with new item creation enabled',
	parameters: {
		notes: `
	    <h2>Create if item does not exist</h2>
		If the entered item does not match any existing items, user is prompted to add a new item
	  `,
	},
};


export const SelectedItem = () => ({
	Component: MultiSelectCreate,

	props: {
		selection: [text('selected item')]
	}
});
SelectedItem.story = {
	name: 'Multi Select with an item pre-selected',
	parameters: {
		notes: `
		This one has a preselected item. Use the knobs panel to change the value
	  `,
	},
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
