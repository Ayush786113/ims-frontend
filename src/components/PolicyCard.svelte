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
        <img src="codi.jpg" alt="policy placeholder">
    </header>
    <h1>{policy.policyName}</h1>
    <footer>
        <h3>{policy.policyReturn}</h3>
        <h4>{policy.policyInvestment}</h4>
    </footer>
    <div class="grid">
        <button on:click={addTOCompare}>Compare</button>
        <a href="/purchase/{policy.policyID}"><button>Purchase</button></a>
    </div>
</article>