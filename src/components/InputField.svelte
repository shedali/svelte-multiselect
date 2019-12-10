<script>
export let value = ""
export let ref;
import { fade, slide, fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

function whoosh(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );

    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || elasticOut,
      css: (t, u) => `transform: ${existingTransform} scale(${t})`
    };
  }

</script>

<style>
    div {
        font-size: 12px;
        font-weight:bolder;
        border: 1px dotted grey;
        padding: 10px;
        cursor:pointer;
        width:100px;
        border-radius:10px;
    }

</style>

<div contenteditable="true" in:whoosh
    bind:textContent={value} bind:this={ref}>
</div>