export async function load(){
    const policies = await fetch(
        "https://ims.insiderserver.tk/"
    )
    return {
        "policies": await policies.json()
    }
}