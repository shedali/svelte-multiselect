<script>

import { fade, slide, fly } from "svelte/transition";
import { elasticOut } from "svelte/easing";
import MultiCreateItem from "./MultiCreateItem.svelte";
export let vertical ;
export let selectedOptions = [];
export let closeHandler = ()=>{}
</script>

<style>
.vertical {
  display: flex;
  justify-items: space-between;
  flex-direction: column;
}

</style>

<div data-testid="selected-items" class="selected-items" class:vertical={vertical}>
{#each selectedOptions as option, index}
    <span in:fade>
      <MultiCreateItem title={option} closeHandler={closeHandler}/>
  </span>
{/each}
</div>