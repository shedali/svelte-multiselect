import MultiCreateItem from "./components/MultiCreateItem.svelte";
export default {
    title: 'MultiCreateItem',
};


export const Item = () => ({
    Component: MultiCreateItem,
    props: {}
});

Item.story = {
    name: 'A selected item',
    parameters: {
        notes: `
      <h2>An individual selected item</h2>
    - when the x is clicked, dispatches close handler
    `,
    },
};