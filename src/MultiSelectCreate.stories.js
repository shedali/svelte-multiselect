import MultiSelectCreate from "./components/MultiSelectCreate.svelte";
export default {
    title: 'MultiSelectCreate',
};

export const create = () => ({
    Component: MultiSelectCreate,
    props: {
        canCreate: true
    }
});


export const SelectedItem = () => ({
    Component: MultiSelectCreate,

    props: {
        selection: ["Hello"]
    }
})

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