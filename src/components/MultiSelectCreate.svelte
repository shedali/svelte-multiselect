<script lang="typescript">
  import InputField from "./InputField.svelte"  
  import AvailableOptionsList from "./AvailableOptionsList.svelte";
  import SelectedOptionsList from "./SelectedOptionsList.svelte";
  import {writable, get, set} from "svelte/store";
  import {EditableField} from "@shedali/svelteeditableinput"
  import {afterUpdate} from "svelte";
  // PUBLIC API
  export let canCreate = false;
  export let selectedValue = "";
  export let selection = [];
  export let availableOptions= []
  export let vertical = false;
  export let buttonTitle = "select"

  //PRIVATE
  let isInteractive = false
  let searchValue = "";

  export let selectedOptions = writable(selection);
    let ref;
  let addOption = (option)=>{
    const opts = get(selectedOptions)
    const newopts = opts.concat(option)
    selectedOptions.set(newopts)
    searchValue=""
    isInteractive=false;
  }

  let removeOption = (toRemove)=>{
    const opts = get(selectedOptions)
    const newopts = get(selectedOptions).filter(o=>o!==toRemove)
    selectedOptions.set(newopts)
    isInteractive=false;
  }

  let removeItems = (e)=>{
    isInteractive=false
    const opts = get(selectedOptions)
    const newopts = opts.concat(searchValue)
    selectedOptions.set(newopts)
  }

  //DERIVED
  let available, canPressEnter, found;
  $: available = availableOptions
  .filter(v=>!$selectedOptions.includes(v))
  .filter(v=>v.match(searchValue))
  $: found = available.length<2
  $: canPressEnter = found && searchValue.length>2 && available;

  afterUpdate(() => {
    isInteractive && ref.focus();
  });
</script>

<style>
ul, li {
  user-select: none;
 -webkit-user-select: none;
}
.change-button{
  font-size: 18px;
  font-weight: bolder;
  padding:10px;
  margin:10px;
}

.return {
  font-size:30px;
}

ul, span {
  cursor: pointer;
}


li {
  list-style: none;
}
</style>

<!-- <pre>debug {JSON.stringify($selectedOptions)}</pre>
<pre>debug {JSON.stringify(available)}</pre> -->

<div on:keydown={(e)=>{
  if(e.keyCode===13){
    if(canPressEnter){
      
      addOption(available.toString().trim() || searchValue)
      searchValue="";
    }
    
  }return
  }}>
    {#if !isInteractive}
    <span class="change-button" on:click={()=>{
    isInteractive=!isInteractive;
    }}>
  {buttonTitle}
  </span>


  {:else}
    <InputField 
    bind:ref={ref}
    on:blur={()=>{isInteractive=false;}}
     value={selectedValue} type="text" bind:value={searchValue}/>
  {/if}


</div> 

{#if canCreate && !$selectedOptions.includes(searchValue)&& !selection.includes(searchValue) && searchValue.length>2}
  <span on:click={removeItems}>➕
    {searchValue}
  </span>
{/if}
{#if canPressEnter}
  <span class="return">⏎</span> {available}
{/if}


<SelectedOptionsList selectedOptions={$selectedOptions} closeHandler={removeOption}/>

<AvailableOptionsList options={available} addOption={(option)=>{
addOption(option);
}}/>
