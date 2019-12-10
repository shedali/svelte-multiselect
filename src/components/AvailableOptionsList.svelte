<script>

import { fade, slide, fly } from "svelte/transition";
import { elasticOut } from "svelte/easing";

export let options = [];
export let addOption = (option)=>{ 
    console.log(option);
};

$: available = options;
</script>

<style>

.option-item {
  background-color: pink;
  margin:1px;
  border-radius:10px;
  text-align:center;
}

.options-list {
  margin:30px 10px;
  cursor: pointer;
  max-width:100px;
  display: flex;
  flex-direction: column;
}
</style>

<div class='options-list'>      
    {#each available as option, index}
        <span in:fade out:fly class="option-item" on:click={()=>addOption(option)}>{option}</span>
    {/each}
</div>