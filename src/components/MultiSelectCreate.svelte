<script lang="typescript">
  import InputField from "./InputField.svelte"  
  import MultiCreateItem from "./MultiCreateItem.svelte";
  import {writable, get, set} from "svelte/store";
  
  // PUBLIC API
  export let canCreate = false;
  export let selectedValue = "";
  export let selection = []

  //PRIVATE
  let isInteractive = false
  let options = ["one", "two", "three"];
  let searchValue = "";
  
  export let selectedOptions = writable(selection);

  let addOption = (option)=>{
    const opts = get(selectedOptions)
    const newopts = opts.concat(option)
    selectedOptions.set(newopts)
    searchValue=""
  }

  let removeOption = (toRemove)=>{
    const opts = get(selectedOptions)
    const newopts = get(selectedOptions).filter(o=>o!==toRemove)
    selectedOptions.set(newopts)
  }

  let removeItems = (e)=>{
    const opts = get(selectedOptions)
    const newopts = opts.concat(searchValue)
    selectedOptions.set(newopts)
  }

  //DERIVED
  let displayedOptions
  $: displayedOptions = options
  .filter(v=>!$selectedOptions.includes(v))
  .filter(v=>v.match(searchValue))


</script>
<style>



ul, span {
  cursor: pointer;
}

li {
  list-style: none;
}
</style>



  <pre>debug {JSON.stringify($selectedOptions)}</pre>



<div on:keydown={(e)=>{
  if(e.keyCode===13){
    searchValue="";
  }
  }}>
      {#if !isInteractive}
    <span on:click={()=>{
    isInteractive=!isInteractive;
  }}>
  select
  </span>


  {:else}
    <InputField on:blur={()=>{isInteractive=false;}} value={selectedValue} type="text" bind:value={searchValue}/>
  {/if}


</div> 

{#if canCreate && !$selectedOptions.includes(searchValue)&& !options.includes(searchValue) && searchValue.length>2}
  <span on:click={removeItems}>➕
    {searchValue}
  </span>
{/if}


<div data-testid="selected-items">
{#each $selectedOptions as option, index}
    <span>
  <MultiCreateItem title={option} closeHandler={removeOption}/>
  </span>
{/each}
</div>

{#if isInteractive}
  <div>
      <ul>      
          {#each displayedOptions as option, index}
              <li on:click={()=>addOption(option)}>{option}</li>
          {/each}
      </ul>
  </div>
{/if}
