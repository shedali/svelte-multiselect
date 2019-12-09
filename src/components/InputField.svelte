<script>
export let value = ""
</script>

<style>
    div {
        font-size: 20px;
        font-weight:bolder;
        border: 1px dotted grey;
        padding: 10px;
        cursor:pointer;
        width:300px;
        border-radius:10px;
    }

</style>

<div contenteditable="true"
    bind:textContent={value}>
</div>