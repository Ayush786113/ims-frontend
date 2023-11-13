<script>
    export let data
    let _name = "", _age = ""
    const policy = data.data
    async function addBeneficiary(){
        const _data = {
            name: _name,
            age: _age
        }
        const write = await fetch(
            "https://ims-backend-lthb.onrender.com/"+data.id,
            {
                method: 'POST',
                body: JSON.stringify(_data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
</script>

<div class="container">
    <h1>{policy.policyName}</h1>
    <div class="grid">
        <h3>
            Return: {policy.policyReturn}
        </h3>
        <h3>
            Investment: {policy.policyInvestment}
        </h3>
    </div>
    <h5>Beneficiaries</h5>
    {#each policy.beneficiaries as beneficiary}
        <p class="grid">
            <input type="text" readonly value="{beneficiary.name}">
            <input type="text" readonly value="{beneficiary.age}">
        </p>
    {/each}
    <div class="grid">
        <input type="text" placeholder="Name" bind:value={_name}>
        <input type="text" placeholder="Age" bind:value={_age}>
        <button on:click={addBeneficiary}>Add</button>
    </div>
</div>