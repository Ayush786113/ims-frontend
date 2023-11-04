<script>
    import { getArray } from '$lib/compare'
    import { onMount } from 'svelte'
    import PolicyCardWrapper from "../../components/PolicyCardWrapper.svelte";
    
    let dialog = null, policies = []
    
    onMount(async() => {
        dialog = document.getElementById("nothingtocompare")
        getComparison()
    })
    
    async function getComparison(){
        if(getArray().length === 0)
            dialog.setAttribute("open", "open")
        else{
            const comparedPolicies = await fetch(
                "http://ims.insiderserver.tk/compare",
                {
                    headers: {
                        'Content-type': 'application/json'
                    },

                    method: 'POST',
                    body: JSON.stringify(getArray())
                }
            )
            policies = await comparedPolicies.json()
        }
    }
</script>

<div class="container">
    <PolicyCardWrapper policies={policies}/>
    <dialog id="nothingtocompare">
        <article>
            <p>
                Please add some policies to compare first!
            </p>
            <a href="/"><button>Home</button></a>
        </article>
    </dialog>
</div>