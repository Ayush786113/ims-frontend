<script>
    import { onMount } from 'svelte'
    export let data
    let downpayment = 1000, months = 12, emi = 0
    let dialog = null
    onMount(async() => {
        dialog = document.getElementById("dialog")
    })
    async function getEMI(){
        const payload = {
            "downpayment": downpayment,
            "months": months,
            "id": data.id
        }
        const getemi = await fetch(
            'https://ims.insiderserver.tk/underwriting',
            {
                headers: {
                    'Content-Type':'application/json'
                },
                method: 'POST',
                body: JSON.stringify(payload)
            }
        )
        emi = await getemi.text()
        dialog.setAttribute("open", "open")
    }
    function closeDialog(){
        dialog.removeAttribute("open")
    }
    function successAlert(){
        alert("Success buying the policy! Relax and Enjoy!")
        closeDialog()
    }
</script>

<div class="top container">
    <div class="grid">
        <div>
            <div class="grid">
                <label for="downpayment">Select Your downpayment</label>
                <label for="downpayment">{downpayment}</label>
            </div>
            <input bind:value={downpayment} type="range" name="downpayment" min="1000" max="100000" step="1000">
        </div>
        <div>
            <div class="grid">
                <label for="months">Select Your Term</label>
                <label for="months">{months}</label>
            </div>
            <input bind:value={months} type="range" name="months" min="12" max="60" step="12">
        </div>
    </div>
    <button on:click={getEMI}>Calculate EMI</button>
    <dialog id="dialog">
        <article>
            <span>Your EMI comes to be <strong>{emi}/-</strong> per month</span>
            <div class="grid">
                <button on:click={closeDialog}>Cancel</button>
                <button on:click={successAlert}>Buy</button>
            </div>
        </article>
    </dialog>
</div>

<style>
    .top{
        margin-top: 50px;
    }
</style>