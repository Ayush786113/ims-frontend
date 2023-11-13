<script>
    import { addToCompare } from '$lib/compare'
    export let policy
    function addTOCompare(){
        addToCompare(policy.policyID);
    }
    function purchase(){
        console.log("purchased");
    }
</script>

<article>
    <header>
        <a href="/{policy.policyID}/details">
            <img src="codi.jpg" alt="policy placeholder">
        </a>
    </header>
    <h3>{policy.policyName}</h3>
    <footer>
        <h3>{policy.policyReturn}</h3>
        <h4>{policy.policyInvestment}</h4>
    </footer>
    <div class="grid">
        <button on:click={addTOCompare}>Compare</button>
        <a href="/{policy.policyID}/purchase"><button>Purchase</button></a>
    </div>
</article>

<style>
    img{
        width: 250px;
        height: 250px;
    }
</style>