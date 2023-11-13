<script>
    import PolicyCardWrapper from '../components/PolicyCardWrapper.svelte'
    export let data;
    let policies = data.policies, field = 0, order = 0, _field = "Field", _order = "Order"
    async function fieldOrder(field, order){
        const sortedPolicies = await fetch(
            "https://ims-backend-lthb.onrender.com?field="+field+"&order="+order
        )
        policies = await sortedPolicies.json()
    }
</script>

<div class="container">
    <div class="grid">
        <details role="list">
            <summary aria-haspopup="listbox">{_field}</summary>
            <ul role="listbox">
              <li><a>ID</a></li>
              <li><a>Name</a></li>
              <li><a>Investment</a></li>
              <li><a>Return</a></li>
            </ul>
        </details>
        <details role="list">
            <summary aria-haspopup="listbox">{_order}</summary>
            <ul role="listbox">
              <li><a>Ascending</a></li>
              <li><a>Descending</a></li>
            </ul>
          </details>
          <button>Apply</button>
    </div>
    <PolicyCardWrapper policies={policies}/>
</div>