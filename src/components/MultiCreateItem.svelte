<script>
    export let title = "no title provided";
    export let closeHandler = (toRemove)=>{
        console.error('no close handler provided');
    }
</script>

<style>
    div{
        vertical-align:middle;
        cursor: pointer;
        border-radius: 10px;
        background-color: #eaeaea;
        display: inline;
        padding:5px 10px;
        font-size: 12px;
        margin:0 3px;
    }

    .remove-cross {
        vertical-align:middle;
        padding:2px;
        margin-left:10px;
    }
    .remove-cross svg{
        height: 10px;
        width: 10px;
    }
</style>

<div data-testid="selected-item" on:click={()=>closeHandler(title)}>
    <span>{title}</span>
    <span data-testid="remove-cross" class="remove-cross"><svg viewBox="0 0 27.965 27.965" xmlns="http://www.w3.org/2000/svg"><path d="m13.98 0c-7.721 0-13.98 6.261-13.98 13.983 0 7.721 6.259 13.982 13.98 13.982 7.725 0 13.985-6.262 13.985-13.982 0-7.722-6.26-13.983-13.985-13.983zm6.012 17.769-2.227 2.224s-3.523-3.78-3.786-3.78c-.259 0-3.783 3.78-3.783 3.78l-2.228-2.224s3.784-3.472 3.784-3.781c0-.314-3.784-3.787-3.784-3.787l2.228-2.229s3.553 3.782 3.783 3.782c.232 0 3.786-3.782 3.786-3.782l2.227 2.229s-3.785 3.523-3.785 3.787c0 .251 3.785 3.781 3.785 3.781z"/></svg></span>
</div>