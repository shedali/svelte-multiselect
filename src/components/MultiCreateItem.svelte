<script>
    export let title = "no title provided";
    export let closeHandler = (toRemove)=>{
        console.error('no close handler provided');
    }
</script>

<style>
    div{
        cursor: pointer;
        border-radius: 30px;
        background-color: #eaeaea;
        display: inline;
        padding:10px 20px;
        margin:0 10px;
    }

    span {
        border-radius: 100%;
        border: 1px solid #feafea;
        padding:2px;
        margin-left:10px;
    }
</style>

<div data-testid="selected-item">
    <span>{title}</span>
    <span data-testid="remove-cross" on:click={()=>closeHandler(title)}>x</span>
</div>