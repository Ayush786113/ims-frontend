<script>
    import PolicyCard from './PolicyCard.svelte'
    export let policies
</script>

<div>
    {#each policies as policy}
        <PolicyCard policy={policy}/>
    {/each}
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
</style>