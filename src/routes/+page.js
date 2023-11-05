export async function load(){
    const policies = await fetch(
        "https://ims-backend-lthb.onrender.com"
    )
    return {
        "policies": await policies.json()
    }
}