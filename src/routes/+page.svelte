<script>
    import PolicyCardWrapper from '../components/PolicyCardWrapper.svelte'
    export let data;
    let policies = data.policies
    async function fieldOrder(field, order){
        const sortedPolicies = await fetch(
            "https://ims.insiderserver.tk?field="+field+"&order="+order
        )
        policies = await sortedPolicies.json()
    }
</script>

<div class="container">
    <PolicyCardWrapper policies={policies}/>
</div>