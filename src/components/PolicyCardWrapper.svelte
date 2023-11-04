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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
    }
</style>